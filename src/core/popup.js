import React, { Component } from "react";
import './popup.css'


export default class PopUp extends Component {

  handleClick = () => {
   this.props.toggle();
  };


render() {
  return (
   <div className="modal shadow-lg p-3 mb-5 bg-white rounded text-center ">
       <h3 className="m-2">Add Address</h3>
     <div className="modal_content form-group">
       <input className="form-control m-2" name="type" value={this.props.type} onChange={this.props.address} placeholder="Enter Type ..office,home,etc."/>
      <textarea className="form-control m-2" value={this.props.add} name="Address" onChange={this.props.address} placeholder="Enter Address">
  
      </textarea>
      <div className="text-center">
      <button className="btn btn-danger  " onClick={this.props.handleAddressSubmit}>Submit</button>
      </div>
    </div>
    <span className="close" onClick={this.handleClick}>&times;    </span>
   
   </div>
  );
 }
}
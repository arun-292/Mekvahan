import React, { Component } from "react";
import './popup.css'


export default class PopUp extends Component {

  handleClick = () => {
   this.props.toggle();
  };


render() {
  return (
   <div className="modal">
       <h3>Add Address</h3>
     <div className="modal_content">
       <input name="type" value={this.props.type} onChange={this.props.address} placeholder="Enter Type ..office,home,etc."/>
      <textarea value={this.props.add} name="Address" onChange={this.props.address} placeholder="Enter Address">
        
      </textarea>
      <button className="sbt-btn" onClick={this.props.handleAddressSubmit}>Submit</button>
    </div>
    <span className="close" onClick={this.handleClick}>&times;    </span>
   
   </div>
  );
 }
}
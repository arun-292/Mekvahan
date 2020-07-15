import React,{useState} from 'react';
import {Redirect} from 'react-router-dom'
import pic from '../img/1.png';
import logo from '../img/2.png';
import facebook from '../img/4.png';
import google from '../img/3.png';

class login extends React.Component{

    constructor(props){
        
        super(props);
        let Authorized=false;
        this.state={
            mobile:"",
            password:"",
            Authorized:false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   }

     handleInputChange(event) {
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){

        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        
         fetch("https://mekvahan.com/api/android_intern_task/", requestOptions)
         .then(Response=>{
             console.log(Response);
            if(!Response.error&&Response.status===200){
                this.setState({Authorized:true})
            }
            else{
                alert("error");
            }
        })
    };
    
    
    render(){

        if(this.state.Authorized)
        {
            return <Redirect to='./homePage'/>
        }
        else{
        return (

        <div className="row py-5 px-5">
            <div className="col-6">
            <img src={pic}  alt="" className="float-right" />
            </div>
    
            <div className="col-3">
            
            <img src={logo} width="75" alt="" className=""></img><span className="text-danger text-size font-weight-bold">MEKVAHAN</span>

            <form >
                <div className="form-group">
                    <input type="text" className="form-control" name="mobile" value={this.state.mobile} placeholder="10 digit mobile number" onChange={this.handleInputChange}>
                    </input>
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange}>
                    </input>
                </div>
                <a className="forgot" href="#">Forgot password?</a>
                <br/><br/>
                <button className="btn btn-danger btn-block" type="submit" onClick={this.handleSubmit} >Login</button>
                
                <h6 className="text-muted text-center">Don't have an account? <a className="forgot text-danger font-weight-bold" href="#">Sign up now</a></h6>
                <h6 className="text-muted text-center">Or</h6>
                <h6 className="text-muted text-center">Continue with</h6>
                <div className="container text-center">
                    <img src={facebook} alt="" width="50" ></img>
                    <img src={google} alt="" width="50"></img>
			    </div>
            </form>
            
        </div>
    </div>
    )
}
}
}

        

export default login;
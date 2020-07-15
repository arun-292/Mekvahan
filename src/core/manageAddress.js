import React, { useState } from 'react';
import homePage from './homePage';
import { Link } from 'react-router-dom';
import gray from '../img/6.jpg'
import './app.css';
import er from '../img/5.png'
import Popup from "./popup"


function ManageAddress()
{
    let [seen,setseen]=useState(false);
    let [Address,setAddress]=useState("");
    let [type,setType]=useState("");
    let [AddArray,setAddArray]=useState([]);

   const togglePop = () => {
        setseen(!seen)
    };

   function handlepop(e){
       e.preventDefault();
       console.log("Clicked");
       setseen(true);
       console.log(seen)
   }
 function handleAddress(e){
     e.preventDefault();
     if(e.target.name==="Address")
     setAddress(e.target.value); 
     else
     setType(e.target.value);  
     console.log(Address);  

 }
 function handleAddressSubmit(e){
     e.preventDefault();
     let add=[...AddArray];
     add.push({Address:Address,type:type});
     setAddArray(add);
     setAddress("");
     setType("")
     console.log(AddArray)
 }

    return(

        <div className="row">
            <div className="col-3 py-3">

                <div cassName="card">
                    <div className="card-header">
                        <img className="rounded-circle"  width="50" src={gray}/>
                        <span className="px-5 font-weight-bold h3">HI<br/><span className="px-5">Mekvahan!</span></span>
                    </div>
                    <div className="py-2">
                    </div>
                    <ul className="list-group">
                        <li className=" list-group-item">
                            <Link to="/homePage" className="nav-link ">My Profile</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/manageAddress" className="nav-link">Manage Address</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#" className="nav-link">Change Password</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="col-9 py-3">
                <div>
                    <div className="card">
                        <li className="list-group-item">
                        <span className="px-3 font-weight-bold h3">My Addresses<a href="#" onClick={handlepop} id="head">Add Address</a>
                        </span>
                        </li>
                    </div>
                    <div className="py-2">
                    </div>
                    {/*<span className="text-center">*/}
                    <div className="d-inline-flex flex-wrap p-2 bd-highlight">                 
                    
                    {
                     AddArray.map((data,key)=>{
                        return (
                            <div className="card m-2">
                            <div className="card-header lead">{data.type}</div>
                                <div className="card-body">
                        <p className="lead font-weight-normal text-wrap" key={key}>{data.Address}</p>
                                    <button className="btn btn-danger"> EDIT</button><button className="btn btn-danger mx-4">UPDATE</button>
                                </div>
                            </div>
                        )
                    })
                    }
                   
                    </div>
                    
                    {/* <img id="error" src={er} className="py-5"/> */}
                {/*{</span>*/}
            </div>
                </div>
               

                {seen ? <Popup type={type} add={Address} toggle={togglePop} address={handleAddress} handleAddressSubmit={handleAddressSubmit}/> : null}

         </div>

    );
}
export default ManageAddress;
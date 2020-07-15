import React from 'react'
import gray from '../img/6.jpg'
import { Redirect, Link, withRouter } from 'react-router-dom'

 function homePage(){

    return (
        <div className="row">
                <div className="col-3 py-3">
                <div cassName="card">
                <div className="card-header">
                <img className="rounded-circle"  width="50" src={gray}/>
                <span className="px-5 font-weight-bold h3">HI<br/><span className="px-5">Mekvahan!</span></span>
                </div>
                <div className="py-2"></div>
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
        </div>
    )
}

export default withRouter(homePage)

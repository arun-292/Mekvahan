import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import login from "./core/login";
import homePage from './core/homePage';
import manageAddress from './core/manageAddress';

export default function Routes(){

    return (
        
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={login}/> 
            <Route exact path="/homePage" component={homePage}/> 
            <Route exact path="/manageAddress" component={manageAddress}/>
        </Switch>
    </BrowserRouter>
    )
}


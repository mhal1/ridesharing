import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./LoginComp";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ShowRide from "./ShowRideComp";
import Bookings from "./Bookings";
import GuardedRoute from "./GuardedRoutes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <div>
                <Switch> {/* only match path*/}
                    <Route exact path="/" render={() => <Redirect to={"/login"}/>}/>
                    <Route exact path="/login" component={Login}/>
                    <GuardedRoute path='/show-rides' component={ShowRide}/>
                    <GuardedRoute exact path="/show-rides" component={ShowRide}/>
                    <GuardedRoute exact path="/bookings" component={Bookings}/>
                </Switch>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

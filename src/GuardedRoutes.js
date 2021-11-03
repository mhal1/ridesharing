import React from 'react';
import { Route, Redirect } from "react-router-dom";
import store from "./RideStore";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.getState().currentUser !== ''
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default GuardedRoute;
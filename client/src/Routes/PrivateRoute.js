import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({component:Component , ...rest}) => {
    
    
    const token = localStorage.getItem('token')
    if(!token) {
     return   <Redirect to="/Login"/>
    }
    return (
        <div>
            <Route component={Component} {...rest}/>
        </div>
    )
}

export default PrivateRoute

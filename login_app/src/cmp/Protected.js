import React, { Component } from 'react';
import{ Redirect } from 'react-router-dom';
function Protected(props)
{
    const Cmp = props.cmp
    var auth = JSON.parse(localStorage.getItem('auth'))
    console.warn(auth)

    return <div> Protected </div>

}



export default Protected;
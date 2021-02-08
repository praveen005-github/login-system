import React, { Component } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Protected from "./Protected";
//import Router from 'react-router-dom';


class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }


    login() {
        console.warn("state", this.state)   
        fetch(`http://localhost:8000/userData?q=${this.state.email}&password=${this.state.password}`).then((data) => {
            data.json().then((response)=>{
                console.warn("response",response)
                if(response.length>0){
                    /*alert('Logged In Successfully')*/
                    localStorage.setItem("login", JSON.stringify(response));
                    window.location.href='/home'
                    
                }
                else{
                    window.alert('Check email and password!!')
                    console.log('Login Failed')
                }
            })
        })        
    }
    render() {
        return (
            <div>
                Login Page
                <br />
                <Protected/>
                <br />
                <input type="text" placeholder="Email" onChange={(evt) => { this.setState({ email: evt.target.value }) }} /> <br /> <br />
                <input type="password" placeholder="Password" onChange={(evt) => { this.setState({ password: evt.target.value }) }} /> <br /> <br />
                <button onClick={() => this.login()} > Login </button>
                {JSON.parse(localStorage.getItem('login')) ? <Redirect to="/Home" /> : null}
            </div>
        )
    }
}

export default Login;
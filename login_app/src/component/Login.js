import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Home from './Home'
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
                    alert('Logged In Successfully')
                    localStorage.setItem("login", JSON.stringify(response));
                }
                else{
                    window.alert('Check email and password!!')
                    console.log('Login Failed')
                }
            })
        })        
    }
    render() {
        var loggedin = JSON.parse(localStorage.getItem('login'));
        return (
            <div>
                Login Page
                <br />
                {loggedin ? <Redirect to="/Home" />:null}
                <br />
                <input type="email" placeholder="Email" onChange={(evt) => { this.setState({ email: evt.target.value }) }} /> <br /> <br />
                <input type="password" placeholder="Password" onChange={(evt) => { this.setState({ password: evt.target.value }) }} /> <br /> <br />
                <button onClick={() => this.login()} > Login </button>
                {JSON.parse(localStorage.getItem('login')) ? <Redirect to="/Home" /> : null}
            </div>
        )
    }
}

export default Login;
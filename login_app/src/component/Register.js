import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import Protected from "./Protected";

class Register extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            email:'',
            password:''
        }
    }
    register(){
        console.warn("state", this.state);
        fetch(`http://localhost:8000/userData?q=${this.state.email}`).then((data) => {
            data.json().then((response) => {


            })
        })
        fetch('http://localhost:8000/userData', {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(this.state) 
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Register Successful")
                console.log(response);
                localStorage.setItem("login", JSON.stringify(response))
            })
        })
    }
    render() {
        return (
            <div>
                Registration Page
                <br />
                <Protected/>
                <br />
                <input type="text" placeholder="Full Name" onChange={(evt) => {this.setState({fullName: evt.target.value})}} /> <br /> <br /> 
                <input type="email" placeholder="Email" onChange={(evt) => { this.setState({ email: evt.target.value }) }} /> <br /> <br />
                <input type="password" placeholder="Password" onChange={(evt) => { this.setState({ password: evt.target.value }) }} /> <br /> <br />
                <input type="password" placeholder="Confirm Password" onChange={(evt) => { this.setState({ c_password: evt.target.value }) }} /> <br /> <br /> 
                <button onClick={() => this.register()} > Register </button>
            </div>
        )
    }
}

export default Register;
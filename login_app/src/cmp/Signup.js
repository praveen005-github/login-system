import React, { Component } from 'react';

class Signup extends Component {
    constructor()
    {
        super();
        this.state={
            username:'',
            password:''
        }
    }
    signup(){
        console.log ("Login Called",this.state)
        fetch('http://localhost:8000/login',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(this.state)
        })
    }
    render(){
        return(
            <div>
                <div>   
                    <input type = "text" placeholder="Enter UserName" onChange={(e) => {this.setState({username:e.target.value})}} /><br/> <br/>
                    <input type = "text" placeholder="Enter Password" onChange={(e) => {this.setState({password:e.target.value})}} /><br/> <br/>

                    <button onClick={() => this.signup()}>Login</button>
                </div>
            </div>
        )
    }
}

export default Signup;
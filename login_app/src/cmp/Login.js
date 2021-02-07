import React, { Component } from 'react';
class Login extends Component {
    constructor()
    {
        super();
        this.state={
            username:'',
            password:''
        }
    }
    login(){
        console.log ("Login Called",this.state)
        fetch("http://localhost:8000/login?username="+this.state.username+"&password="+this.state.password).then((data) => {
            data.json().then((resp) => {
                console.warn("resp",resp)
                if(resp.length>0)
                {
                    console.log("Login Successful")
                }
                else
                {
                    alert("Check username and password")
                    console.log("Login Failed")
                }
            })
        })
    }
    render(){
        return(
            <div>
                <div>
                    <input type = "text" placeholder="Enter UserName" onChange={(e) => {this.setState({username:e.target.value})}} /><br/> <br/>
                    <input type = "text" placeholder="Enter Password" onChange={(e) => {this.setState({password:e.target.value})}} /><br/> <br/>

                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;
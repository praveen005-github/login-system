import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class NavMenu extends Component {

    logout = () =>{
        /*alert("Logged Out Successfully");*/
        localStorage.clear();
    }


    render() {
        return (
            <div>
                {/*<Link to="Home"> Home</Link>*/}
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout" onClick={this.logout}>Log Out</Link>
            </div>
        );
    }
}

export default NavMenu;
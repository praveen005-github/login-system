import React, { Component } from 'react';
import { /*BrowserRouter as Router, Switch, Route,*/ Link } from "react-router-dom";


class Nav extends Component {

    logOut(){
        localStorage.clear();
    }

    render() {
        return (
            <div>
                {/*<Link to="Home"> Home</Link>*/}
                <Link to="/Register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to ='/LogOut'>Log Out</Link>
            </div>
        );
    }
}

export default Nav;
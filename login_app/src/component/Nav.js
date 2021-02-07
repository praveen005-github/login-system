import React, { Component } from 'react';
import { /*BrowserRouter as Router, Switch, Route,*/ Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                {/*<Link to="Home"> Home</Link>*/}
                <Link to="/Register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default Nav;
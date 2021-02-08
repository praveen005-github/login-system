import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"


class NavMenu extends Component {
    render() {
        return (
            <div>
                {/*<Link to="Home"> Home</Link>*/}
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default NavMenu;
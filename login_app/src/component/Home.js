import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    render() {
        var loggedin = JSON.parse(localStorage.getItem('login'));
        return (
            <div>
                {loggedin?null:<Redirect to='/login'/>}
                You are Logged In !!
            </div>
        );
    }
}

export default Home;
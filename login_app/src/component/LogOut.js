import React, { Component } from 'react';

function logout() {
    localStorage.clear();
    window.location.href = '/';
}


class LogOut extends Component {
    render() {
        return (
            <div>
                LOGOUT
            </div>
        );
    }
}

export default LogOut;
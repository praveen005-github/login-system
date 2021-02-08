import React, { Component } from 'react';



class Logout extends Component {
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }
    render() {
        return (
            <div>
                logout();
            </div>
        );
    }
}

export default Logout;
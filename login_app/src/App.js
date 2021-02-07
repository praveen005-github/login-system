import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route,/* Link*/ } from "react-router-dom"
import Home from './component/Home'
import Login from './component/Login'
import Protected from './component/Protected'
import Nav from './component/Nav'
import Register from './component/Register'
import LogOut from './component/LogOut'


function App() {
  return (
    <div className="App">
      <Router>

        {/*<LogOut />*/}
        <Nav/>

        <Switch>
          <Route path='/Home'>
            <Home/>
          </Route>

          <Route path='/Register'>
            <Register />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/'>
            <Login />
          </Route>
          
        </Switch>

      </Router>

    </div>
  );
}

export default App;

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './component/Home'
import Login from './component/Login'
import Protected from './component/Protected'
import NavMenu from './component/NavMenu'
import Register from './component/Register'
import LogOut from './component/Logout'


function App() {
  return (
    <div className="App">
      <Router>

        {/*<LogOut />*/}
        <NavMenu/>

        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>

          <Route path='/register'>
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

import './App.css';
import Login from './cmp/Login'
import Home from './cmp/Home'
import Signup from './cmp/Signup'
import Protected from './cmp/Protected'
import LoginSuccess from './cmp/LoginSuccess'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Link to ="login"> Login </Link>
        <Link to ="signup"> Signup </Link>
        <Link to ='/'>Home</Link>
        
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>

      </Router>
     
    </div>
  );
}

export default App;

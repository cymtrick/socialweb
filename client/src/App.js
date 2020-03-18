import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import SignupDetails from './components/SignupDetails';
import TopicsSelect from './components/TopicsSelect';
import Stats from './components/Stats';
import Forum from './components/Forum';


import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
function App() {
  return (
  	<Router>
    <div className="App">
                <Switch>
                    <Route exact path="/" component={Forum}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/signupdetails" component={SignupDetails}/>
                    <Route exact path="/topicsselect" component={TopicsSelect}/>
                    <Route exact path="/stats" component={Stats}/>
                </Switch>
    </div>
    </Router>
  );
}

export default App;

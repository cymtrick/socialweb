import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import SignupDetails from './components/SignupDetails';
import TopicsSelect from './components/TopicsSelect';
import Stats from './components/Stats';
import Forum from './components/Forum';
import ProblemSol from './components/ProblemSol';
import User from './components/User';
import Points from './components/Points';

import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
function App() {
  return (
  	<Router>
    <div className="App">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/signupdetails" component={SignupDetails}/>
                    <Route exact path="/topicsselect" component={TopicsSelect}/>
                    <Route exact path="/stats" component={Stats}/>
                    <Route exact path="/forum" component={Forum}/>
                    <Route exact path="/problem" component={ProblemSol}/>
                    <Route exact path="/leaderboard" component={Points}/>
                    <Route exact path="/user" component={User}/>
                </Switch>
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import SignupDetails from './components/SignupDetails';
import TopicsSelect from './components/TopicsSelect';
import Stats from './components/Stats';


import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
function App() {
  return (
    <Stats />
  );
}

export default App;

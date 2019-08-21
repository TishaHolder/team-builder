import React from 'react';
import {useState} from "react";

import { Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Card from "./components/Card.js";
import Form from "./components/Form.js";

function App() {

  const [people, setPeople] = useState([{name: "Tisha", email: "email", role: "student"}]);

  const addPerson = person => {
    setPeople ([...people, person]);
  }

  

  return (
    <div className="App">

    <Link to = "/">Home</Link>
    <Link to = "/add">Add Person</Link>

    <Route path = "/add" render = {props => <Form {...props} submitPerson = {addPerson} /> } />
    

    <Route exact path = "/" render = {props => people.map (person => <Card person = {person} />)} />
    

    
      
    </div>
  );
}

export default App;

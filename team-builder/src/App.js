import React from 'react';
import {useState} from "react";
import { Route, Link, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import teamdata from "./teamdata.js";

import TeamMembersList from "./components/TeamMembersList.js";
import Form from "./components/Form.js";

function App() {

  //add the data imported from teamdata.js to state
  const [teamMembersList, setTeamMembersList] = useState(teamdata);  

  //function to add a new team member
  const addTeamMember = (teamMember) => {
    setTeamMembersList ([...teamMembersList, teamMember]);
  }

    

  return (
    <div className="App">

    <ul className="navbar">
      <li><NavLink exact to = "/" activeClassName="activeNavButton">Team Members</NavLink></li>
      <li><NavLink to = "/form" activeClassName="activeNavButton">Add Team Member</NavLink> </li>
    </ul>  

    <Route exact path = "/" render = {props => <TeamMembersList {...props} teamMembersList = {teamMembersList} />} />   
    <Route path = "/form" render = {props => <Form {...props} addTeamMember = {addTeamMember} /> } />      
      
    </div>
  );
}

export default App;

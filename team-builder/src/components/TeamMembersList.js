import React from "react";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


function TeamMembersList (props) {   

    return (
        <div  className = "characters-list-wrapper">
            {props.teamMembersList.map (teammember => (
                <div className = "character-card" key = {teammember.id}> 
                    <h2>{teammember.name} </h2>
                    <p> {teammember.email} </p>
                    <p> {teammember.role} </p>  

                </div>
            
            ))} 

        </div>

    );

}

export default TeamMembersList;
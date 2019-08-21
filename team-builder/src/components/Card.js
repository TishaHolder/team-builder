import React from "react";

import { Route } from 'react-router-dom';


function Card (props) {

    

    return (
        <div>
            <h2> {props.person.name} </h2>
            <p> {props.person.email} </p>
            <p> {props.person.role} </p>

        </div>


    );



}

export default Card;
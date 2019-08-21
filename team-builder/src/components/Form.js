import React from "react";
import {useState} from "react";

import { Route } from 'react-router-dom';


function Form (props) {

    //this is the same as writing const setPeople = props.setPeople
    const { submitPerson } = props;

    const [person, setPerson] = useState({name: "", email: "@email", role: ""});

    const handleChange = event => {
        setPerson ({...person, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        submitPerson(person);        
        setPerson({name: "", email: "@email", role: ""});
    }

    return (

        <form onSubmit = {handleSubmit}>
            {/*the spread operator copies an old object into a new object
               (...person) copies all the person object's old keys and values (name, email, and role), specifying name
               to the right sets a new value for name. when we specify a new value for name, the new object is 
               going to take the right most value for that key*/}
            <input placeholder = "name" value = {person.name} name = "name" onChange = {handleChange}/>
            <input placeholder = "email" value = {person.email} name = "email" onChange = {handleChange} />
            <input placeholder = "role" value = {person.role} name = "role" onChange = {handleChange}/>

            <button type = "submit"> Add Person </button>

        </form>


    );


}

export default Form;

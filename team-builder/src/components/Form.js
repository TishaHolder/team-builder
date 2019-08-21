import React from "react";
import {useState} from "react";


function Form (props) {

    const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""});

    const changeHandler = event => {

        //computed properties
        setTeamMember ({...teamMember, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        const newTeamMember = {
            ...teamMember,
            id: Date.now()
        };

        props.addTeamMember(newTeamMember);
        setTeamMember({name: "", email: "@email", role: ""});
    }

    return (

        <div className = "contact-div">

            <h1>New Team Member Form</h1>

            <form onSubmit = {submitForm}>
                {/*the spread operator copies an old object into a new object
                (...person) copies all the person object's old keys and values (name, email, and role), specifying name
                to the right sets a new value for name. when we specify a new value for name, the new object is 
                going to take the right most value for that key*/}
                
                
                <input placeholder = "name" value = {teamMember.name} name = "name" onChange = {changeHandler}/>
                
                <input placeholder = "email" value = {teamMember.email} name = "email" onChange = {changeHandler} />
                            
                <input placeholder = "role" value = {teamMember.role} name = "role" onChange = {changeHandler}/>
                
                <button type = "submit"> Add Person </button>

            </form>

        </div>


    );


}

export default Form;

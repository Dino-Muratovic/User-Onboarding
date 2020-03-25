import React, { useState, useEffect } from 'react'; // import hooks
import * as yup from 'yup'; // yup for everything


// Setting up our Schema
const formSchema = yup.object().shape({
   name: yup.string().required('Name is required'),
   email: yup.string().email().required('Must include the email'),
   password: yup.string().required('Password is required'),
   terms: yup.boolean().oneOf([true], "Please agree to Terms and Conditions.") 
})



//Create our form component here
const Form = () => {

//Set state for the form itself -- for all the inputs
const [formState, setFormState] = useState({
    name:"",
    email:"",
    password:"",
    terms:""
})

//Set state for all the errors
const [errors, setErrors] = useState({
    name:"",
    email:"",
    password:"",
    terms:""
})

// State for the button disable
const [buttonDisabled, setButtonDisabled] = useState(true);
//New state to set our post request too. So we can console.log and see it
const [post, setPost] = useState([]);


/* Each time the form value state is updated, check to see if it is valid per our schema. 
--For an example check if name is a string and make sure some value is entered because it's required.
  This will allow us to enable/disable the submit button.*/
useEffect(() => {
/* We pass the entire state into the entire schema, no need to use reach here. 
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */   
    formSchema.isValid(formState)
    .then(valid => {
        setButtonDisabled(!valid);
        console.log(valid);
    });

}, [formState]) // dependancy array - watch for formState if it changes


//Event handler Input change
const inputChange = event => {
/* event.persist allows us to use the synthetic event in an async manner.
    We need to be able to use it after the form validation */
    event.persist(); // QUESTION
    // console.log(`this is syntethic event `, event); 
    console.log(`event target`, event.target)// ---------- // this returns that particular input element
    console.log(`event target name`, event.target.name)// ----------- // this returns the key of name
    console.log(`event target value`, event.target.value)// ---------- // this returns whatever value typed into that key example (name: --->'whatever typed in here'<---)


    const newFormData = {
        ...formState,
        [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked:event.target.value
    };      
    
}

    return (
        <form>

            <label htmlFor="name">Name</label>
                <input 
                    value={formState.name} // formState is our State set up for an example formState={ using -----> name:"" <-----, email:"", password:""} accessing with dot notation 
                    id="name"  
                    type="text"
                    name="name"
                    onChange={inputChange}
            /> <br/>

            <label htmlFor="email">Email</label>
                <input 
                    value={formState.email}  // formState is our State set up for an example formState={ using name:"" ,-----> email:"", <----- password:""} accessing with dot notation
                    id="email"
                    type="text" 
                    name="email"
                    onChange={inputChange}
            /> <br/>

            <label htmlFor="password">Password</label>
                <input            
                    value={formState.password}  // formState is our State set up for an example formState={ using name:"" , email:"", ----->password:""<-----} accessing with dot notation
                    id="password"
                    type="password"
                    name="password"
                    onChange={inputChange}
            /> <br/>

            <label htmlFor="terms">Please agreed to Terms of Service</label>
                <input      
                    id="terms"   
                    type="checkbox"
                    name="terms"
                    checked={formState.terms} // formState is our State set up for an example formState={ using name:"" , email:"", ----->password:""<-----} accessing with dot notation
                    onChange={inputChange}
             /> <br/>

            <button>
               Submit
            </button>




            
            
        </form>
    )
}

export default Form;
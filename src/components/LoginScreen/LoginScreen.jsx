import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import useForm from './useForm';



const LoginScreen = (props) => {
    const {formValues, handleChange, handleSubmit } = useForm(register);
    
    function register() {
        props.loginUserCall()
        alert('Thanks for Registering!')
        
    }


    return ( 
        <div>
            <Form onSubmit= {handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="username" name="username" placeholder="Enter UserName" onChange= {handleChange} value= {formValues.username} required= {true}/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} value= {formValues.password} required= {true}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
        </div>

    );
}

 
export default LoginScreen;





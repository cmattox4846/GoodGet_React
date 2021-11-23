import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";


function LoginScreen(){
    return ( 
        <div>
        <h1>hello</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="userName" placeholder="Enter UserName" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
        </div>
        
    );
}
 
export default LoginScreen;
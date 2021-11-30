import React, { Component} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';



class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName:'',            
            password:''
        }
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();             
        this.props.loginUserCall(this.state)
    }

    render(){
        return ( 
            <div>
                <Form onSubmit= {this.handleSubmit} method= 'post'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" name="userName" placeholder="Enter UserName"  onChange= {this.handleChange} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Password" onChange= {this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary"  type="submit">
                      Submit
                    </Button>
                </Form>
            </div>

        );
    }
}
 
export default LoginScreen;
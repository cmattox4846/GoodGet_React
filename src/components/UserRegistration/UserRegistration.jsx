import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class UserRegistration extends Component {
    constructor(props){
        super(props)
            this.state = {
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
                phoneNumber: '',
            }
        }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.registerUser(this.state)
    }
    
    render() {
        return (
            <div className="formCreate">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" name='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                    </Form.Group>
                     
                    <Form.Group>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" name='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                    </Form.Group>

                                            
                    <Form.Group>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" name='userName' onChange={this.handleChange} value={this.state.userName}/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name='email' onChange={this.handleChange} value={this.state.email}/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name='password' onChange={this.handleChange} value={this.state.password}/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>PhoneNumber:</Form.Label>
                        <Form.Control type="text" name='phoneNumber' onChange={this.handleChange} value={this.state.phoneNumber}/>
                    </Form.Group>
                   
                    <Button className="button" type="submit">Create User</Button>
                </Form>
            </div>
        )
    }
}
 
export default UserRegistration;
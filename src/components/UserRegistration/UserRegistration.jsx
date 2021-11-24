import React, { Component } from 'react';

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
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input type="text" name='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                    <label>Last Name:</label>
                    <input type="text" name='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                    <label>Username:</label>
                    <input type="text" name='userName' onChange={this.handleChange} value={this.state.userName}/>
                    <label>Email:</label>
                    <input type="text" name='email' onChange={this.handleChange} value={this.state.email}/>
                    <label>Password:</label>
                    <input type="text" name='password' onChange={this.handleChange} value={this.state.password}/>
                    <label>PhoneNumber:</label>
                    <input type="text" name='phoneNumber' onChange={this.handleChange} value={this.state.phoneNumber}/>
                    <button className="button" type="submit">Create User</button>
                </form>
            </div>
        )
    }
}
 
export default UserRegistration;
import React, {Component} from "react";
import "./HeaderAndNav.css"
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class HeaderAndNav extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchTerm:''          
            
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
    return(
        <div>
            
            <h3>Welcome to Good Get</h3>
            <div>
                
                <nav className='topNav'>
                <Link to="/" >Home</Link>
                <Link to="/login" >Log in Here</Link>
                <Link to="/products">Products</Link>
                <Link to="/sellProducts" >Sell Products</Link>
                <Link to="/userRegistration">User Registration</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/ShoppingCart">Shopping Cart</Link>
                <Form onSubmit= {this.handleSubmit} method= 'post'>
                    <Form.Group>
                     <Form.Control
                     type="text"
                     name="SearchBar"
                     placeholder="Search for Product"
                     value={this.state.searchTerm}
                     onChange={this.handleChange}/>                  

                  

                    <Button variant="primary" type="submit">
                      Search
                    </Button>
                    </Form.Group>
                </Form>
                
                
                </nav>
                
            </div>
            
        </div>
        
    )
    }
}


export default HeaderAndNav
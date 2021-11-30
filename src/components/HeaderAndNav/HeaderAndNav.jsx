import React, {Component} from "react";
import "./HeaderAndNav.css"
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router";
import useForm from "../LoginScreen/useForm";


const HeaderAndNav = (props) =>{
    const {formValues, handleChange, handleSubmit } = useForm(searchForProducts);
    
    let navigate= useNavigate();

    async function searchForProducts() { 
        console.log(formValues)                  
        props.productSearch(formValues.searchTerm)
        navigate("../products")
    }

    
    return(
        <div>            
            <h3>Welcome to Good Get</h3>
            <div>                
                <nav className='topNav'>
                <Link to="/" >Home</Link>                
                <Link to="/products">Products</Link>
                <Link to="/sellProducts" >Sell Products</Link>
                <Link to="/userRegistration">User Registration</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/ShoppingCart">Shopping Cart</Link>
                <Link to="/login" >Login Here</Link>
                <Link to="/" onClick={() =>{props.logout() }}>Logout Here</Link>
                <Link to="/Detail">Details</Link>
                <Form onSubmit= {handleSubmit}>
                    <Form.Group>
                     <Form.Control
                     type="searchTerm"
                     name="searchTerm"
                     placeholder="Search for Product"                     
                     onChange={handleChange}
                     required= {true}/>                  

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



export default HeaderAndNav
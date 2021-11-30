import React from "react";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useForm from "../LoginScreen/useForm";
import StarRating from 'react-bootstrap-star-rating';


const DetailTable = (props) => {

  const {formValues, handleChange, handleSubmit } = useForm(addReview);
  
  function addReview() {
    try{
        props.addProductReview(formValues)
    
    } catch (error) {
        console.error(error.message)
    }
  }
  

  return (      
    <div>
      <Form onSubmit= {handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Review</Form.Label>
            <Form.Control type="review" name="review" placeholder="Write Review Here" onChange= {handleChange} required= {true}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} required= {true}/>
        </Form.Group>
        
        <Button variant="primary" type="submit" >
           Submit
        </Button>
       </Form>
    </div>
    
  );
};


  

  


export default DetailTable;

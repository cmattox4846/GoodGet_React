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
          props.addReview(formValues)
      
      } catch (error) {
          console.error(error.message)
      }
      
          <Table>
            <tbody>
            <tr><td>{props.details.name}</td></tr>
            <tr><td>{props.details.description}</td></tr>
            <tr><td>{props.details.price}</td></tr>
            <tr><td>{props.reviews.rating}</td></tr>
            <tr><td>{props.reviews.review}</td></tr>
            </tbody>    
          </Table>
      
  }
  

  return (
    <div>
      <div>
        <Table>
          <tbody>
          <tr><td>{props.details.name}</td></tr>
          <tr><td>{props.details.description}</td></tr>
          <tr><td>{props.details.price}</td></tr>
          </tbody>    
        </Table>
      </div>
      <div>
        <Form onSubmit= {handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Review</Form.Label>
              <Form.Control type="review" name="Review" placeholder="Write Review Here" onChange= {handleChange} required= {true}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} required= {true}/>
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
    </div>
  );
};


  

  


export default DetailTable;

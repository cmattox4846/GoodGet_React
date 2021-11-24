import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class SellProductTable extends Component {
    constructor(props){
        super(props)
            this.state = {
                name: '',
                description: '',
                price: 0,
            }
        }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sellProduct(this.state)
    }
    
    render() {
        return (
            <div className="formCreate">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Product Name:</Form.Label>
                        <Form.Control type="text" name='name' onChange={this.handleChange} value={this.state.name}/>
                    </Form.Group>
                     
                    <Form.Group>
                        <Form.Label>Product Description:</Form.Label>
                        <Form.Control type="text" name='description' onChange={this.handleChange} value={this.state.description}/>
                    </Form.Group>

                                            
                    <Form.Group>
                        <Form.Label>Product Price:</Form.Label>
                        <Form.Control type="text" name='price' onChange={this.handleChange} value={this.state.price}/>
                    </Form.Group>                   
                    <Button className="button" type="submit">List Product</Button>
                </Form>
            </div>
        )
    }
}
 
export default SellProductTable;
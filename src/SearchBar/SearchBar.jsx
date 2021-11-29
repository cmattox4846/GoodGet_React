import React from "react";
import Form from 'react-bootstrap/Form'



class SearchBar extends Component{
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
        return ( 
            <div>
                <Form onSubmit= {this.handleSubmit} method= 'post'>
                    <Form.Group>
                     <Form.Control
                     type="text"
                     name="SearchBar"
                     placeholder="Search for Product"
                     value={this.state.searchTerm}
                     onChange={this.handleChange}/>
                    </Form.Group>

                  

                    <Button variant="primary" type="submit">
                      Search
                    </Button>
                </Form>
            </div>
        )
    }    
    
}
export default SearchBar





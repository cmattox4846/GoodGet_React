import React from "react";
import './HomePage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomePage(){
    return(
        <div>
            <Container>
                <Row>
                    <h1 className='header'>Welcome to Good Get</h1>
                </Row>        
            </Container>
        </div>
        
    )
}

export default HomePage;
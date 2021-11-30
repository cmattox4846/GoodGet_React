import React from "react";
import Table from "react-bootstrap/Table";







const DetailTable = (props) => {
  return (
    <div>
  
      
          <Table>
            <tbody>
            <tr><td>{props.details.name}</td></tr>
            <tr><td>{props.details.description}</td></tr>
            <tr><td>{props.details.price}</td></tr>
            <tr><td>{props.reviews.rating}</td></tr>
            <tr><td>{props.reviews.review}</td></tr>
            </tbody>    
          </Table>
      
    </div>
  );
};

export default DetailTable;

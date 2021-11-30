import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";





const ProductTable = (props) => {
  return (
    <div>
      <Table>
        <thead>
            <tr>
                <td>Product ID</td>
                <td>Name</td>
                <td>Description</td>
                <td>Price</td>

            </tr>
        </thead>
        <tbody>
          {props.listOfProducts.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td><button onClick={() => props.add(product)}>Add Product</button>
                <td><button onClick={() => props.view(product.id)}>See Product Details</button></td></td></tr>
                
            );
          })}
        </tbody>
      </Table>
      <button onClick={() => props.getAllProducts()}> View All Products </button>
      
          <Table>
            <tbody>
            <tr><td>{props.details.name}</td></tr>
            <tr><td>{props.details.description}</td></tr>
            <tr><td>{props.details.price}</td></tr>
            </tbody>    
          </Table>
      
    </div>
  );
};

export default ProductTable;

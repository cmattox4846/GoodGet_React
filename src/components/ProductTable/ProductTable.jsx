import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';
import "./ProductTable.css"




const ProductTable = (props) => {
  return (
    <div className="productTable">
      <button onClick={() => props.getAllProducts()}> View All Products </button>
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
                <td><Link to="/ProductDetail" onClick={() => props.view(product.id)} >Product Details  </Link></td></td>
                </tr>
                
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;

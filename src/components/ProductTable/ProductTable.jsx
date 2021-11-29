import React from "react";
import Table from "react-bootstrap/Table";

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
              </tr>              
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;

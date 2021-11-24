import React from "react";

const ProductTable = (props) => {

  <React.Fragment>
    <div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <div>
        {props.productList.map(function(product){
          return (
            <div onClick={() => props.getProducts()}>
              <tr>
                <td>{product.id}</td>
                <td>{product.Name}</td>
                <td>{product.Description}</td>
                <td>{product.Price}</td>
              </tr>
            </div>
            )
          }
        )}
      </div>
      </table>
    </div>
  </React.Fragment>
}
 
export default ProductTable;
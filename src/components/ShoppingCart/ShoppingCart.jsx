import React from "react";
import Table from 'react-bootstrap/Table'


const ShoppingCart = (props) => {
return(
    <div>
    <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
        {props.list.map((cartItem) => {
          return (
              <tr key={cartItem.id}>
                <td>{cartItem.product.name}</td>
                <td>{cartItem.product.description}</td>
                <td>{cartItem.product.price}</td>
                <td>{cartItem.quantity}</td>
                <td><button onClick={() => props.delete(cartItem.productId)}>Remove item</button></td>
              </tr>
            )
          }
        )}
        </tbody>
      </Table>
    </div>
  )
}
 
export default ShoppingCart;
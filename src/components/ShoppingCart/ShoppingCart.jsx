import React from "react";

const ShoppingCart = (props) => {

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
        {props.list.map(function(cartItem){
          return (
            <div>
              <tr>
                <td>{cartItem.Name}</td>
                <td>{cartItem.Description}</td>
                <td>{cartItem.Price}</td>
                <td>{cartItem.Quantity}</td>
                <button onClick={() => props.delete(cartItem.Id)}>Remove item</button>
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
 
export default ShoppingCart;
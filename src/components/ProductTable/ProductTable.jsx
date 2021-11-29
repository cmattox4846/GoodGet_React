import React from "react";
import Table from 'react-bootstrap/Table'

const ProductTable = (props) => {
    return (
        props.listOfProducts.map(function(product){
          return (
              <div key={product.id}>
                <Table>                    
                    <tbody>
                        <tr>
                             <td>{product.id}</td>
                             <td>{product.name}</td>
                             <td>{product.description}</td>
                             <td>{product.price}</td><button onClick={() => props.add(product.Id)}>Add to Cart</button>
                        </tr>
                    </tbody>    
                </Table>
            </div>
            )
          }
        )
    )
  
}
 
export default ProductTable;
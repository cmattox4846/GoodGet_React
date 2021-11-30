import React from "react";
import Table from "react-bootstrap/Table";




// const ProductDetails = (product) => {
//     return (
//         <div>
//             <Table>
//                 <tbody>
//                 <tr>
//                 <td>{product.id}</td>
//                 <td>{product.name}</td>
//                 <td>{product.description}</td>
//                 <td>{product.price}</td>
//                 <td>{product.reveiw}</td>
//                 <td><button onClick={() => add(product)}>Add Product</button></td></tr>
//                 </tbody>
//             </Table>
//         </div>
//     )
// }
// export default ProductDetails


const DetailTable = (props) => {
  return (
    <div>
  
      
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

export default DetailTable;

import React from "react";
import "./HeaderAndNav.css"
import { Link } from 'react-router-dom'


function HeaderAndNav(props) {
    return(
        <div>
            
            <h3>Welcome to Good Get</h3>
            <div>
                
                <nav className='topNav'>
                <Link to="/" >Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/sellProducts" >Sell Products</Link>
                
                </nav>
                
            </div>
            
        </div>
        
    )
}

export default HeaderAndNav
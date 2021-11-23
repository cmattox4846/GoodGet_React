import React from "react";
import "./HeaderAndNav.css"


function HeaderAndNav(props) {
    return(
        <div>
            
            <h3>Welcome to Good Get</h3>
            <div className="topnav">
                <a href="#home" >Home</a>
                <a href="#Products">Products</a>
                <a href="#Login">Log in Here</a>
                <a href="#logout" >Log out Here</a>
            </div>
            
        </div>
        
    )
}

export default HeaderAndNav
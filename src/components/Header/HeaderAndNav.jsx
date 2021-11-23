import React from "react";
import "./HeaderAndNav.css"

function Header(props) {
    return(
        <Header>
            Welcome to Good Get
            <div className="topNav">
                <a className="active">Home</a>
                <a >Products</a>
                <a >Log in Here</a>
                <a >Log out Here</a>
            </div>
        </Header> 
    )
}

export default Header
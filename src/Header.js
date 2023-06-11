import React from "react";

import { Link } from "react-router-dom";

export default function Header(props){
    return(
        <div className="header">
            <Link to="/game">
                <img src="dice.png" className="logo"></img>
            </Link>
            <Link style={{textDecoration: 'none',marginLeft:"auto"}}to="contactus">
                <h2 className="contact">Contact Us</h2>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <h2 className="contact">{props.name === "" ? "User":"User: "+props.name}</h2>
            </Link>
        </div>
    )
}
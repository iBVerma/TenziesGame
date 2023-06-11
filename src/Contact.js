import React from "react";

export default function Contact(){
    return(
        <div className="contact-">
            <h2>Contact Us</h2>
            <form className="form-">
                <div className="names">
                    <input placeholder="Enter First Name"  type="text" id="first"/>
                    <label htmlFor="first">First Name: </label>
                    <br />
                    <br />
                    <input placeholder="Enter Last Name" type="text" id="last"/>
                    <label htmlFor="last">Last Name: </label>
                    <br />
                </div>
                <br/>
                <label htmlFor="email" className="mail-label">Email: </label>
                <input placeholder="Enter Email" type="text" id="email" className="mail"/>
                <br/>
                <br/>
                <textarea className="comment">Write Comment</textarea>
                <br />
                <button className="button">Submit</button>
            </form>
        </div>
    )
}
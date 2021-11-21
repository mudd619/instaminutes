import React from 'react'
import { Link } from 'react-router-dom';
import "./Contact.css"

export default function ContactPop() {

    let locall = JSON.parse(localStorage.getItem("userT")); 

    return (
        <>
           <div className="Contact-parentDiv">
           <h2 className="Contact-option-name">Choose What You Like ?</h2>
               <div className="options-parentDiv">
                   <div className="contact-name-numberDiv">
                       <h2>Name : {locall.name}</h2>
                       <h4>Contact No. : {locall.contact}</h4>
                   </div>
                   <span className="contact-name-numberDiv-span">Whould you like to chat ? </span><Link to="/chat"><button className="contact-options-button-chat">CHAT</button></Link>
               </div>
            </div>
        </>
    )
}
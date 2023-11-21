import React from "react";
import '../App.css';

function Contact(){
    return(
<div className="container">
    <h1> Contact Me!</h1>
    <div className="contact-list">
        <div className="contact-items">
            <a href="https://www.instagram.com/adigupta1215/" >
                    <img src="Images/instagramlogo.png" alt="instagramlogo"  id = 'instalogo'></img>
                    <p> adigupta1215</p>
            </a>
        </div>
        <div className="contact-items">
            <img src="Images/emailclipart.webp" alt="email" id = "email"></img>
            <p>adigupta1215@gmail.com</p>
        </div>
        <div className="contact-items">
             <img src="Images/PhoneIcon.png" alt="phone" id = "phone"></img>
            <p>716-213-8839</p>
           </div> 
        </div>
    </div>
    )
}

export default Contact;

import React from "react";
import '../App.css';

function About(){
    return(
        <div className="container">
        <div className="row">
            <div className="about-col-1">
                <img className = "img-shadow" src="Images/staredown.jpeg" alt="col1" height = {600} width= {450}></img>
                </div>
            <div className="about-col-2">
                <h1> About Me</h1>
                <p>I'm an freshman studying Computer Science and Mathematics at UMD.... I do things sometimes. <br></br><br></br> I want to combine CS and Bio by exploring computational biology!</p> 
            </div>
        </div>
    </div>

    );
}

export default About
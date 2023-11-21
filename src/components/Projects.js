import React from "react";
import '../App.css';

function Projects(){
    return(
        <div className="container">
        <h1>Projects</h1>
        <div className="worklist">
            <div className="work">
                <a href="secondpage.html">
                   <img className="img-shadow" src="Images/todoimage.jpg" alt="todoimage"></img>
                </a>
            </div>
            <div className="work">
                <img className= "img-shadow" src="Images/BreathingBetterLogo.webp" alt="breathingbetterlogo"></img>
            </div>
            <div className="work">
                <img className="img-shadow" src="Images/app-dev-club-logo.png" alt="appdevclub"></img>
            </div>
        </div>
    </div>
    );
} 

export default Projects;

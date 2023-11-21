import React from "react";
import {Link} from 'react-router-dom'
import '../App.css';

function Header(){
    return(
     <header>
        <div className="container"> 
        <nav> 
            <img src="Images/apathetic.webp" className="logo" alt = "apatheticlogo"></img>
            <div className = "rightside"> 
                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/about">About</Link></li>
                     <li><Link to= "/projects">Projects</Link></li>
                     <li><Link to= "/contact">Contact</Link></li>
                </ul>
                <img id = "darkmode" src="Images/sunicon.png" alt="darkmode" width = {50} height = {50}></img>
            </div>
        </nav>
    </div>
</header>
    );
}

export default Header;
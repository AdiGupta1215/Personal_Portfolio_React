import React from "react";
import '../App.css';

function Home(){
    return(
        <div className="row">
            <div className = "header-text">
                  <h1>Aditya Gupta</h1>
                  <p>I do stuff sometimes</p>
            </div>
            <img className = "img-shadow" src="Images/jojos.jpeg" alt="jojos" height= {600} width={ 600*3/4} />
        </div>
    );
}

export default Home;
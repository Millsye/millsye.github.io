import React from "react";
import dronedelivery from '../assets/images/droneproject.jpeg';
import sportsmodel from '../assets/images/sportsmodel.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://youtu.be/ACWOi3qdMEs" target="_blank" rel="noreferrer"><img src={dronedelivery} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/ACWOi3qdMEs" target="_blank" rel="noreferrer"><h2>Drone Delivery Simulation</h2></a>
                <p>Created extensions and improvements to a Drone Delivery System, implementing a Singleton and State design patterns to improve the simulations efficiency, scalability, and usability.</p>
            </div>
            <div className="project">
                <a href="https://docs.google.com/spreadsheets/d/16ixAojepLrPMrDPaandZI8Oz1tpz5Y4r3nFFF-lNFGA/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={sportsmodel} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/spreadsheets/d/16ixAojepLrPMrDPaandZI8Oz1tpz5Y4r3nFFF-lNFGA/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Sports Prediction Model</h2></a>
                <p>Created a sports statline prediction model for the NFL season that uses previous games, opponets, and game conditions to predict the new statline for the player, helping navigate o/u lines and fantasy football players.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
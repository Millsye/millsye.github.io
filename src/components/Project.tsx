import React from "react";
import dronedelivery from '../assets/images/droneproject.jpeg';
import sportsmodel from '../assets/images/sportsmodel.jpeg';
import cybersecurity from '../assets/images/cybersecurity.png';
import garden from '../assets/images/garden.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://youtu.be/ACWOi3qdMEs" target="_blank" rel="noreferrer"><img src={dronedelivery} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://youtu.be/ACWOi3qdMEs" target="_blank" rel="noreferrer"><h2>Drone Delivery Simulation</h2></a>
                    <p>Created extensions and improvements to a Drone Delivery System, implementing a Singleton and State design patterns to improve the simulations efficiency, scalability, and usability.</p>
                </div>
                <div className="project">
                    <a href="https://garden-tracker.lovable.app" target="_blank" rel="noreferrer"><img src={garden} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://garden-tracker.lovable.app" target="_blank" rel="noreferrer"><h2>Garden Tracker App</h2></a>
                    <p>Made a home garden tracker app that visually displays your home garden and what crops are planted where, with watering overdue notifications as well. Made using Loveable and Supabase, utilizing AI and databases.</p>
                </div>
                <div className="project">
                    <a href="https://coursera.org/share/609a2c917e2a3e102ae8e553629875d1" target="_blank" rel="noreferrer"><img src={cybersecurity} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://coursera.org/share/609a2c917e2a3e102ae8e553629875d1" target="_blank" rel="noreferrer"><h2>Google Cybersecurity Certificate</h2></a>
                    <p>Learned about the importance of cybersecurity and common practices used by Google and other organizations. Used Python, Linux, and SQL in hands-on activites as well as utilized SIEM tools to protect from mock attacks.</p>
                </div>
                <div className="project">
                    <a href="https://docs.google.com/spreadsheets/d/16ixAojepLrPMrDPaandZI8Oz1tpz5Y4r3nFFF-lNFGA/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={sportsmodel} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://docs.google.com/spreadsheets/d/16ixAojepLrPMrDPaandZI8Oz1tpz5Y4r3nFFF-lNFGA/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Sports Prediction Model</h2></a>
                    <p>Created a sports statline prediction model for the NFL season that uses previous games, opponets, and game conditions to predict the new statline for the player, helping navigate o/u lines and fantasy football players.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
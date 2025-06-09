import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faDocker, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Angular",
    "C#",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
];

const labelsSecond = [
    "C++",
    "UML",
    "Jira",
    "OOP",
    "Design Patterns"
];

const labelsThird = [
    "Azure DevOps",
    "Docker",
    "Github",
    "Python",
    "Java",
    "C",
    "C++",
    "OCaml"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faAngular} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>As a Software Developer Intern at Zurich, I worked on both frontend and backend features for internal agent tools. I built custom C# APIs integrated with Angular, worked with SQL databases, and contributed to production deployments.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills Utilized:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Simulation & Design Patterns</h3>
                        <p>Worked on a drone package delivery simulator where I used design patterns like Strategy and Observer to build reusable, scalable components. I collaborated with a team to simulate real-world logistics and routing behavior.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills Utilized:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrosoft} size="3x" />
                        <h3>DevOps & Agile</h3>
                        <p>I’ve worked with tools like ADO, Docker, GitHub, and cloud platforms to automate builds, testing, and deployments. I’ve worked in CI/CD pipelines and been apart of a scrum in an Agile work environment.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills Utilized:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
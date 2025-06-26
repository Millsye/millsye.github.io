import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import gophers from '../assets/images/gophers.jpeg';
import outdoors from '../assets/images/outdoors.jpeg';
import resume from '../assets/images/resume.png';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>About Me</h1>
          <Box className="about-me-content">
            <div className="about-me-section alternating-section">
              <div className="text-content">
                <h2>Who I Am</h2>
                <p>
                  I am a computer science student at the University of Minnesota Twin Cities (RTB!). I enjoy going to watching and attending many different sporting events,
                  as well as playing video games, LEGOs, and the outdoors. I am passionate about technology and love to learn new things.
                </p>
              </div>
              <div className="image-content">
                <img src={gophers} alt="Who I Am" />
              </div>
            </div>
            <div className="about-me-section alternating-section">
              <div className="image-content">
                <img src={outdoors} alt="My Interests" />
              </div>
              <div className="text-content">
                <h2>My Interests</h2>
                <p>
                  I love gardening, exercising, sports, and coding. I enjoy full stack development with an emphasis on the backend.
                  As a newer developer, I am always eager to learn and explore new technologies and frameworks.
                </p>
              </div>
            </div>
          </Box>
          <Box className="contact-content">
            <div className="resume-section">
              <h2>Resume</h2>
              <Button
                variant="contained"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                  sx={{
                    backgroundColor: '#800000',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#660000',
                    },
                  }}
              >
                View My Resume
              </Button>
            </div>
            <div className="text-content">
              <h2>Contact Info</h2>
              <p>
                Email: miles_ericson@icloud.com<br />
                School Email: erics184@umn.edu<br />
                Phone: 763-760-0401<br />
              </p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
import React from 'react';
import IMG from '../img/IMG.jpeg';
import { Github, Linkedin, FileWord } from 'react-bootstrap-icons';

function Header(props) {
  return (
    <div className="heading">
      <img
        src={IMG}
        alt="Tiffany"
        className="image header-image"
      />
      <div className="header-text">
          <div>
            <h1>Tiffany Greathead</h1>
            <p><em>Developer. Gamer. Pun Enthusiast.</em></p>
            </div>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/tiffanygreathead/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className={`${props.classColor} text-hover`} 
            >
              <Linkedin width="45" height="45"/>
              <span className="icon-text">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/TorchAblaze"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className={`${props.classColor} text-hover`} 
            >
              <Github width="45" height="45"/>
              <span className="icon-text">GitHub</span>
            </a>
            <a
              href="https://docs.google.com/document/d/1dFPU7tC6WPxnBOGAbj-2Uu14F2y4eOrwPlQYbtGYB7Y"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className={`${props.classColor} text-hover`}
            >
              <FileWord width="45" height="45"/>
              <span className="icon-text">Resume</span>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Header;

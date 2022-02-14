import React from 'react';
import IMG from '../img/IMG.jpeg';
import { Github, Linkedin, FilePdfFill } from 'react-bootstrap-icons';

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
              <Linkedin width="36" height="36 "/>
              <span className="icon-text">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/TorchAblaze"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className={`${props.classColor} text-hover`} 
            >
              <Github width="36" height="36"/>
              <span className="icon-text">GitHub</span>
            </a>
            <a
              href="https://drive.google.com/file/d/16UTa628HPgFdUSewbaOnehtpq1-yE3xn/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className={`${props.classColor} text-hover`}
            >
              <FilePdfFill width="36" height="36"/>
              <span className="icon-text">Resume</span>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Header;

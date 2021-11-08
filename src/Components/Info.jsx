import React from 'react';
import Alien from '../img/Alien.jpeg';

class Info extends React.Component {
  render () {
    return (
      <>
        <div className="box-styles">
          <h2>Skills</h2>
          <ul className="skills">
            <div>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>jQuery</li>
              <li>React.js</li>
            </div>
            <div>
              <li>Webpack</li>
              <li>MySQL</li>
              <li>C# / .NET</li>
              <li>ASP.NET Core</li>
            </div>
            <div>
              <li>GraphQL</li>
              <li>Python</li>
              <li>HTML / CSS</li>
              <li>API Design</li>
            </div>
            <div>
              <li>Git Version Control</li>
              <li>Pair Programming</li>
              <li>Functional Programming</li>
              <li>Test Driven Development</li>
            </div>
          </ul>
        </div>

        <div className="box-styles">
          <h2>Projects</h2>
          <ol>
            <li>
              <a
                href="https://github.com/TorchAblaze/capstone"
                target="_blank"
                rel="noreferrer"
                >CAPSTONE:
              </a> {" "}
              An application that allows users to store photos, travel
              information, and track their favorite places to visit. This project
              is still under construction. Built with:
            </li>
              <ul className="lists">
                <div>
                  <li>CSS</li>
                  <li>Node</li>
                  <li>JavaScript</li>
                </div>
                <div>
                  <li>C#</li>
                  <li>MySQL</li>
                  <li>React</li>
                </div>
                <div>
                  <li>ASP.NET</li>
                  <li>Entity Framework Core</li>
                </div>
              </ul>
            <li>
              <a
                href="https://github.com/TorchAblaze/take-a-hike"
                target="_blank"
                rel="noreferrer"
                >TAKE A HIKE:
              </a>
              {" "}A single page web application that uses three different API calls to
              list National Parks in each state, providing information for each
              park and their current weather conditions. Co-authored by{" "}
              <a
                href="https://github.com/marneymallory"
                target="_blank"
                rel="noreferrer"
                >Marney Mallory
              </a>
              ,{" "}
              <a
                href="https://github.com/JesseDWhite"
                target="_blank"
                rel="noreferrer"
                >Jesse White
              </a>
              ,{" "}
              <a
                href="https://github.com/isaacrmoreno"
                target="_blank"
                rel="noreferrer"
                >Isaac Moreno
              </a>
              {" "}and{" "}
              <a
                href="https://github.com/Magofna68"
                target="_blank"
                rel="noreferrer"
                >Brandon Magofna
              </a>
              . Built with:
            </li>
              <ul className="lists">
                <div>
                  <li>CSS</li>
                  <li>HTML</li>
                </div>
                <div>
                  <li>Node</li>
                  <li>Javascript</li>
                </div>
                <div>
                  <li>Bootstrap</li>
                </div>
              </ul>
            <li>
              <a
                href="https://github.com/TorchAblaze/Factory.Solution"
                target="_blank"
                rel="noreferrer"
                >FACTORY.SOLUTION:
              </a>
              {" "}A web application designed to track factory machine installations.
              Engineers can be added to an employee roster and assigned to a
              machine in need of repairs via the use of many to many
              relationships. Built with:
            </li>
              <ul className="lists">
                <div>
                  <li>C#</li>
                  <li>ASP.NET</li>
                </div>
                <div>
                  <li>MySQL</li>
                  <li>Bootstrap</li>
                </div>
                <div>
                  <li>Entity Framework Core</li>
                </div>
              </ul>
          </ol>
        </div>

        <div className="box-styles">
          <h2>Experience</h2>
          <p>
            I'm a junior QA engineer at{" "}
            <a href="https://rockpapercoin.com/" target="_blank" rel="noreferrer"
              >Rock Paper Coin
            </a>
            . My programming journey started in 2019 via{" "}
            <a href="https://teamtreehouse.com/" target="_blank" rel="noreferrer"
              >Treehouse's
            </a>
            {" "}online courses for Python and JavaScript. I've recently graduated from{" "}
            <a href="https://www.epicodus.com/" target="_blank" rel="noreferrer"
              >Epicodus' 
            </a>
            {" "}full-time full-stack, 27 week program where I strenghtened my JavaScript skills and learned C# and React. I attended Norwich University and have a
            bachelor's degree in Psychology. Before applying to Epicodus, I worked
            four years as a federal agent.
          </p>
          <h2>Interests</h2>
          <p>
            I enjoy gaming and watching movies. Some of my favoirte games are
            Horizon Zero Dawn, Astroneer, Pokemon Shield and most Legend of Zelda
            games. I love traveling/exploring new places, hiking, puns (they are
            intended) and coffee shops. Recently, I've been dedicating most of my
            time to strengthening my programming skills, but lucky for me, I
            really like coding, too!
          </p>
        </div>
        <img className="alien" src={Alien} alt="A stuffed alien" />
      </>
    )
  }
}

export default Info;
import React from 'react';

function Projects() {
  return (
    <div className="box-styles projects">
      <h2>Projects</h2>
        <ol className="lists">
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
          <ul className="lists">
            <div>
              <li>CSS</li>
              <li>HTML</li>
              <li>Node</li>
              <li>JavaScript</li>
              <li>React</li>
            </div>
            <div>
              <li>MySQL</li>
              <li>C#</li>
              <li>ASP.NET</li>
              <li>Entity Framework Core</li>
            </div>
          </ul>
        </li>
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
          <ul className="lists">
            <div>
              <li>CSS</li>
              <li>HTML</li>
              <li>Bootstrap</li>
            </div>
            <div>
              <li>Node</li>
              <li>JavaScript</li>
              <li>jQuery</li>
            </div>
          </ul>
        </li>
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
          <ul className="lists">
            <div>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>MySQL</li>
            </div>
            <div>
              <li>C#</li>
              <li>ASP.NET</li>
              <li>Entity Framework Core</li>
            </div>
          </ul>
        </li>
        {/* <li>
          <a
            href="https://github.com/TorchAblaze/my-spacestagram"
            target="_blank"
            rel="noreferrer"
            >SPACESTAGRAM:
          </a>
          {" "}A web application that uploads pictures using an API call to NASA's image library. Users can search keywords to view relevant photos and click on the "like" button to like their favorite photos. Built with:
          <ul className="lists">
            <div>
              <li>Node</li>
              <li>JavaScript</li>
              <li>React</li>
            </div>
            <div>
              <li>CSS</li>
              <li>HTML</li>
            </div>
          </ul>
        </li> */}
      </ol>
    </div>
  )
}

export default Projects;
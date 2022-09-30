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
            href="https://github.com/TorchAblaze/gift-app"
            target="_blank"
            rel="noreferrer"
            >Gift WrAPP:
          </a> {" "}
          A place to store and organize all your best gift ideas for your loved ones. 
          This is my first Ruby/Rails project inspired by my love for giving 
          meaningful gifts. Mobile first front-end designs created with{" "}
          <a 
            href="https://miro.com/app/board/uXjVOimIejU=/?share_link_id=659258480957"
            target="_blank"
            rel="noreferrer"
            >Miro
          </a>
          {" "}tested my creativity and is helping me bring this 
          project to fruition.This is my most current project and is still a work in 
          progress. Built with:
          <ul className="lists">
            <div>
              <li>Ruby/Rails</li>
              <li>SCSS</li>
              <li>HTML</li>
              <li>Bootstrap</li>
            </div>
          </ul>
        </li>
        {/* <li>
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
        </li> */}
        <li>
          <a
            href="https://github.com/TorchAblaze/my-spacestagram"
            target="_blank"
            rel="noreferrer"
            >SPACESTAGRAM:
          </a>
          {" "}A web application that uploads pictures using an API call to NASA's image library. 
          Users can search keywords to view relevant photos and click the "like" button to like 
          their favorite photos. See the{" "}
          <a
            href="https://torchablaze.github.io/my-spacestagram/"
            target="_blank"
            rel="noreferrer"
            >live website 
          </a>
          . Built with:
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
        </li>
      </ol>
    </div>
  )
}

export default Projects;
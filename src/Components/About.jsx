import React from 'react';
import Alien from '../img/Alien.jpeg';

function About() {
  return (
    <>
      <div className="box-styles lists">
        <div>
          <h3>Experience</h3>
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
            {" "}full-time full-stack, 27-week program where I strengthened my JavaScript skills and learned C# and React. I attended Norwich University and have a
            bachelor's degree in Psychology. Before applying to Epicodus, I worked
            four years as a federal agent.
          </p>
        </div>
        <div>
          <h3>Interests</h3>
          <p>
            I enjoy gaming and watching movies. Some of my favorite games are
            Horizon Zero Dawn, Astroneer, Pokémon Shield and most Legend of Zelda
            games. I love traveling/exploring new places, hiking, puns (they are
            intended) and coffee shops. Recently, I've been dedicating most of my
            time to strengthening my programming skills, but lucky for me, I
            really like coding, too!
          </p>
        </div>
      </div>
      <img className="alien" src={Alien} alt="A stuffed alien" />
    </>
  )
}

export default About;
import React from "react";
import js from '../assets/icons/js.png';
import react from '../assets/icons/react.png';
import redux from '../assets/icons/redux.png';
import git from '../assets/icons/git.png';
import styledcomponents from '../assets/icons/styled-components.png';
import bootstrap from '../assets/icons/bootstrap.png';
import typescript from '../assets/icons/typescript.png';
import nodejs from '../assets/icons/nodejs.png';
import express from '../assets/icons/express.png';
import mysql from '../assets/icons/mysql.png';
import mongodb from '../assets/icons/mongodb.png';
import docker from '../assets/icons/docker.png';
import jest from '../assets/icons/jest.png';
import { ListTechs, MainStacks } from "../styles/pages/Techs";
import { Divider } from "../styles/components/Divider";

class Techs extends React.Component {
  render() {
    return (
      <MainStacks id="stacks">
        <h2>Stacks</h2>
        <ListTechs>
          <div>
            <img src={js} />
            <p>Javascript</p>
          </div>
          <div>
            <img src={react} />
            <p>React</p>
          </div>
          <div>
            <img src={redux} />
            <p>Redux</p>
          </div>
          <div>
            <img src={git} />
            <p>Git</p>
          </div>
          <div>
            <img src={styledcomponents} />
            <p>Styled Components</p>
          </div>
          <div>
            <img src={bootstrap} />
            <p>Bootstrap</p>
          </div>
          <div>
            <img src={typescript} />
            <p>Typescript</p>
          </div>
          <div>
            <img src={nodejs} />
            <p>Node.js</p>
          </div>
          <div>
            <img src={express} />
            <p>Express</p>
          </div>
          <div>
            <img src={mysql} />
            <p>MySQL</p>
          </div>
          <div>
            <img src={mongodb} />
            <p>MongoDB</p>
          </div>
          <div>
            <img src={docker} />
            <p>Docker</p>
          </div>
          <div>
            <img src={jest} />
            <p>Jest</p>
          </div>
        </ListTechs>
        <Divider></Divider>
      </MainStacks>
    )
  }
}

export default Techs;
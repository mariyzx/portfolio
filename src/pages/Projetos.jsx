import React from "react";
import projects from '../projects/projects';
import { AboutProject, CardProject, DivProjects, MainProject } from "../styles/components/Projects";
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { Button } from "../styles/components/Button";

class Projetos extends React.Component {
  render() {
    return (
      <MainProject>
        <h2>Projetos</h2>
        <DivProjects>
          {projects.map((project, index) => (
            <CardProject key={ index } onClick={ () => this.showDetails(project)}>
              <h3><a href={project.links.github} target="_blank" rel="noreferrer">{project.name}</a></h3>
              <img width="435px" height="204px" src={ project.img } alt={ project.description } />
              <AboutProject>
                <p>{project.description}</p>
                <ul>
                  {project.tech.map((a, index) => (
                    <li key={ index }>{a}</li>
                  ))}
                </ul>
                <div>
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    <Button><BsGithub /></Button>
                  </a>
                  <a href={project.links.preview} target="_blank" rel="noreferrer">
                    <Button><CgWebsite /></Button>
                  </a>
                </div>
              </AboutProject>
            </CardProject>
          ))}
        </DivProjects>
      </MainProject>
    )
  }
}

export default Projetos;

import React, { useState } from "react";
import objProjects from '../helpers/projects';
import { AboutProject, CardProject, DivProjects, DivTech, MainProject } from "../styles/pages/Projects";
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { Button, TechButton } from "../styles/components/Button";

function Projetos() {
    const [projects, setProjects] = useState(objProjects);
    const techList = [];

    objProjects.forEach((project) => {
      project.tech.forEach((tech) => {
        if (!techList.includes(tech)) {
          techList.push(tech);
        }
      });
    });

    const orderedTechList = techList.sort((a, b) => a.localeCompare(b))

    const handleClick = async (tech) => {
      setProjects(objProjects.filter((project) => project.tech.includes(tech)))
    }

    return (
      <MainProject id="projetos">
        <h2>Projetos</h2>
        <DivTech>
        {
          orderedTechList.map((tech, i) => (
            <TechButton type="button" key={i} onClick={() => handleClick(tech)}>{tech}</TechButton>
          ))
        }
        </DivTech>
        <DivProjects>
          {projects.map((project, index) => (
            <CardProject key={ index } onClick={ () => this.showDetails(project)}>
              <h3><a href={project.links.github} target="_blank" rel="noreferrer">{project.name}</a></h3>
              <img width="435px" height="204px" src={ project.img } alt={ project.description } />
              <AboutProject>
                <p>{project.description}</p>
                <div>
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    <Button><BsGithub /></Button>
                  </a>
                  {project.links.preview && (
                    <a href={project.links.preview} target="_blank" rel="noreferrer">
                      <Button><CgWebsite /></Button>
                    </a>
                  )}
                </div>
              </AboutProject>
            </CardProject>
          ))}
        </DivProjects>
      </MainProject>
    )
  
}

export default Projetos;

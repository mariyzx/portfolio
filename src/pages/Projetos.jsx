import React from "react";
import projects from '../projects/projects';

class Projetos extends React.Component {
  render() {
    return (
      <section id="projetos">
        <h2>Projetos</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={ index } onClick={ () => this.showDetails(project)} className="project">
              <img width="435px" height="204px" src={ project.img } alt={ project.description } className="img-project" />
              <p><a href={project.links.github} target="_blank" rel="noreferrer">{project.name}</a></p>
              {/* <p>{project.description}</p> */}
              <div className="tech">
                <ul>
                  {project.tech.map((a, index) => (
                    <li key={ index }>{a}</li>
                  ))}
                </ul>
              </div>
              <a href={project.links.preview} target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Preview</button>
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Projetos;

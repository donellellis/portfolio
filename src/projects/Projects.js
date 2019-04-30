import React, { Component } from 'react';
import SingleProject from './SingleProject.js';
import './Projects.css';
import projectData from '../data/projectData.json';

class Projects extends Component {

  render() {

    let list = projectData.map( (project, index) => (
      <SingleProject {...project} key={index}/>
    ))
    
    return (
      <div className="projects-container">
        <div className="projects-text-column">
          <h1 className="projects-title">work.</h1>
          <div className="projects-textbox">
            <p><span className="emphasize">Selected projects</span><br></br> from a portfolio of individual and group projects. Hover to display project information and links to deployed application and GitHub repository. 
            </p>
          </div>
        </div>
        <div className="projects-background">
          <div className="container-projects">
              {list}
          </div>
        </div>
      </div>
      
    );
  }
}

export default Projects;


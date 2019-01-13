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
        <div className="container-column">
          <h1 className="title-left-align title">work.</h1>
          <div className="textBox">
            <p><span className="emphasize">Selected projects</span><br></br> from a portfolio of individual and group projects.
            </p>
          </div>
        </div>
        <div className="container-projects">
          {list}
        </div>
      </div>
      
    );
  }
}

export default Projects;


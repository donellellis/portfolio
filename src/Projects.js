import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleProject from './SingleProject.js';
import './Projects.css';
import projectData from './projectData.json';

class Projects extends Component {

  render() {

    let list = projectData.map( (project, index) => (
      <SingleProject project={project} key={project.id}/>
    ))
    
    return (
      <div className="container">
        <div className="container-column">
          <h1 className="title-left-align title">proj<br></br>ects.</h1>
          <div className="textBox">
            <p><span className="emphasize">Selected work</span><br></br> from a portfolio of individual and group projects.
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


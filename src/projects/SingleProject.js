import React, { Component } from 'react';
import './SingleProject.css';



class SingleProject extends Component {

  render() {

    return (
      <div className="project-display">
        <div className="project-image">
          <img src={this.props.project.image} alt={this.props.project.alt}></img>
        </div>
        <div>
          <h2 className="emphasize project-title">{this.props.project.name}</h2>
          <p className="project-description">{this.props.project.description}</p>
          <div className="project-links">
              <a className="links-light-gray" target="_blank" rel="noopener noreferrer" href={this.props.project.deployedUrl}>[ Deployed ]</a>
              <a className="links-light-gray" target="_blank" rel="noopener noreferrer" href={this.props.project.githubUrl}>[ GitHub ]</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProject;
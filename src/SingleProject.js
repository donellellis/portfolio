import React, { Component } from 'react';
import './SingleProject.css';

class SingleProject extends Component {
  render() {
    return (
      <div className="project-display">
          <h2 className="emphasize project-title">{this.props.project.name}</h2>
          <p className="project-description">{this.props.project.description}</p>
          <div className="project-links">
            <a className="links" target="_blank" href={this.props.project.deployedUrl}>[ Deployed ]</a>
            <a className="links" target="_blank" href={this.props.project.githubUrl}>[ GitHub ]</a>
          </div>
          
      </div>
    );
  }
}

export default SingleProject;
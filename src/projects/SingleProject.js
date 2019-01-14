import React, { Component } from 'react';
import './SingleProject.css';

class SingleProject extends Component {

  state = {
    hover: false
  };

  handleMouseOver = () => {
    this.setState({ hover: true });
  };

  handleMouseOut = () => {
    this.setState({ hover: false });
  };

  handleTouchStart = (event) => {
    event.preventDefault();
    this.handleMouseOver();
  }

  handleTouchMove = (event) => {
    event.preventDefault();
    this.handleMouseOut();
  }


  render() {

    return (
      <div className="project-display" 
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <img 
          className={`project-image ${this.state.hover ? 'project-opacity-zero' : ''}`} 
          src={this.props.image}
          alt={this.props.alt}
          />
        <div 
          className="project-textbox">
          <h2 className={`project-title ${!this.state.hover ? 'project-opacity-zero' : ''}`}>{this.props.name}</h2>
          {this.ProjectText()}
        </div>
      </div>
    );
  }

  ProjectText = () => {
    const linksClassName = 
      `links-light-gray ${!this.state.hover ? 'project-opacity-zero' : ''}`;

    return (

      // returning multiple elements, groups list of children
      <React.Fragment>
        <p className={`project-description ${!this.state.hover ? 'project-opacity-zero' : ''}`}>{this.props.description}</p>
        <p className={`project-tech ${!this.state.hover ? 'project-opacity-zero' : ''}`}>Tech: {this.props.tech}</p>
        <div className="project-links">
          <a 
            className={linksClassName} 
            target="_blank" 
            rel="noopener noreferrer" 
            href={this.props.deployedUrl}
          >
            [ Deployed ]
          </a>
          <a 
            className={linksClassName} 
            target="_blank" 
            rel="noopener noreferrer" 
            href={this.props.githubUrl}
          >
            [ GitHub ]
          </a>
        </div>
      </React.Fragment>
    );
  };
}

export default SingleProject;

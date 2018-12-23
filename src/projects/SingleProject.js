import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SingleProject.css';

class SingleProject extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    tech: PropTypes.string,
    deployedUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
  }

  state = {
    hover: false
  };

  render() {
    const { 
      name, 
      image, 
      alt 
    } = this.props;

    const { hover } = this.state;

    return (
      <div className="project-display" 
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <img 
          className={`project-image ${hover ? 'project-opacity-zero' : ''}`} 
          src={image}
          alt={name}
          />
        <div 
          className="project-textbox">
          <h2 className={`project-title ${!hover ? 'project-opacity-zero' : ''}`}>{name}</h2>
          {this.ProjectText()}
        </div>
      </div>
    );
  }

  ProjectText = () => {
    const linksClassName = 
      `links-light-gray ${!this.state.hover ? 'project-opacity-zero' : ''}`;

    return (
      <React.Fragment>
        <p className={`project-description ${!this.state.hover ? 'project-opacity-zero' : ''}`}>{this.props.description}</p>
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

  handleMouseOver = () => {
    this.setState({ hover: true });
  };

  handleMouseOut = () => {
    this.setState({ hover: false });
  };

}

export default SingleProject;

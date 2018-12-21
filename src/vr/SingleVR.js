import React, { Component } from 'react';
import './SingleVR.css';

class SingleVR extends Component {
  render() {
    return (
      <div className="stereo-link">
          {/* <h2>{this.props.vr.title}</h2>
          <h3>{this.props.vr.sub-title}</h3>
          <a target="_blank" rel="noopener noreferrer" href={this.props.vr.panoramaUrl}>360</a> */}
          <img src={this.props.vr.imagePath} alt={this.props.vr.alt} /> 
      </div>
    );
  }
}

export default SingleVR;
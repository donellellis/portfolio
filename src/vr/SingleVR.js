import React, { Component } from 'react';
import './SingleVR.css';

class SingleVR extends Component {
  render() {
    return (
      <div className="stereo-link">
        {/* <h2 className="vr-title">{this.props.vr.title}</h2>
        <h3 className="vr-sub-title">{this.props.vr.subTitle}</h3> */}
        <a className="vr-link" target="_blank" rel="noopener noreferrer" href={this.props.vr.panoramaURL}>360</a>
        <img className="vr-img" src={this.props.vr.imagePath} alt={this.props.vr.alt} /> 
      </div>
    );
  }
}

export default SingleVR;
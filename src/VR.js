import React, { Component } from 'react';
import './VR.css';

class VR extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-column-vr">
          <h1 className="title-left-align title">VR.</h1>
          <div className="textBox">
          <h2 className="emphasize">Moonshot</h2>
          <h3>Design Competition Project</h3>
          <p>Moonshot is an unbuilt, personal interior design project for a pseudo tech start-up. Developers can have heads-down work time in the closed benching area, step out for a private call, or host meet-up events and client presentations in the residential-inspired lounge and collaboration room. Click on the image to see the space in 360 degrees and colored dots for interactivity.
          </p>
          <p>
            Tech: Revit | Enscape3D | Panotour
          </p>
          </div>
        </div>
        <div className="container-vr">
          <iframe src="http://jessegerard.com/donell-ellis/studiotk/" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default VR;
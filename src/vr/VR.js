import React, { Component } from 'react';
import SingleVR from './SingleVR.js';
import './VR.css';
import vrData from '../data/vrData.json';


class VR extends Component {
  render() {
    
    let list = vrData.map( (vr, index) => (
      <SingleVR vr={vr} key={vr.id}/>
    ))

    return (
      <div className="container-2">
        <div className="vr-splash">
          <div className="container-column-vr">
            <h1 className="title-left-align title">VR.</h1>
            <div className="textBox">
              <h2 className="emphasize">Moonshot</h2>
              <h3>Personal Design Project</h3>
              <p>Moonshot is an unbuilt, personal interior design project for a pseudo tech start-up. Developers can have heads-down work time in the closed benching area, step out for a private call, or host meet-up events and client presentations in the residential-inspired lounge and collaboration room. Click on the image to see the space in 360 degrees and colored dots for interactivity.
              </p>
              <p>
              Tech: Revit | Enscape3D | Panotour
              </p>
            </div>
          </div>
            <div className="container-vr">
                <iframe title="Moonshot Virtual Reality Tour" src="http://jessegerard.com/donell-ellis/studiotk/" alt="Moonshot Virtual Reality Tour" allowFullScreen frameBorder="0"></iframe>
            </div>
          </div>
          <div className="vr-project-grid">
              {list}
          </div>
        </div>
    );
  }
}

export default VR;
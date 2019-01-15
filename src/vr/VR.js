import React, { Component } from 'react';
import './VR.css';


class VR extends Component {
  render() {

    return (
      <div className="vr-container">
          <div className="vr-container-column">
            <h1 className="vr-title">VR.</h1>
            <div className="textBox">
              <h2 className="emphasize">Moonshot</h2>
              <h3>Personal Design Project</h3>
              <p>Moonshot is an unbuilt, personal interior design project for a tech start-up. Developers can have heads-down work time in the closed benching area, step out for a private call, or host meet-up events and client presentations in the residential-inspired lounge and collaboration room. Click on the VR icon on desktop to open fullscreen or on mobile with viewer for an immersive experience.
              </p>
              <p>
              Tech: Revit | Enscape3D | A-Frame
              </p>
            </div>
          </div>
            <div className="vr-aframe">
                <a-scene embedded>
                  <a-assets>
                    <img id="moonshot" crossorigin="anonymous" src="https://i.imgur.com/WI4uGQ7.jpg"></img>
                  </a-assets>
                  <a-sky src="#moonshot"></a-sky>
              </a-scene>
            </div>
        </div>
    );
  }
}

export default VR;
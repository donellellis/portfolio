import React, { Component } from 'react';
import './VR.css';

class VR extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-column">
          <h1 className="title-left-align title">VR.</h1>
          {/* studiotk resimercial vignette */}
          <div className="textBox">
          <p><span className="emphasize">Moonshot</span><br></br> Moonshot, a web development start-up company, derives its name from the tech term defined by Google as a project proposing to solve a huge problem with a radical solution using breakthrough technology. The company is a four-person team of innovators looking to settle in the prominent DuPont Circle neighborhood of DC. The design includes a collaboration room for group brainstorming and pitches which opens to the lounge and pantry area through two large pivoting doors. Developers can have heads-down work time in the closed benching area, step out for a private call, or host meet-up events and client presentations in the residential-inspired lounge and collaboration room.
          </p>
          
          </div>
        </div>
        <iframe src="http://jessegerard.com/donell-ellis/studiotk/" width="1000" height="600" allowFullScreen></iframe>
      </div>
    );
  }
}

export default VR;
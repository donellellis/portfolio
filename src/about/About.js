import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">about<br></br>me.</h1>
        <div className="textBox">
          <p><span className="emphasize">I am a web-developer,</span><br></br> an artist, and a designer that values innovation and creative, spontaneous ideation. My detail-oriented, user-centric approach to planning is strongly influenced by my background as an architect and virtual reality experience creator. I am curious and constantly challenging myself and others to cultivate new skills.
          </p>
          <a className="links" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/donell-ellis/">[ LinkedIn ]</a>
          <a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/donellellis">[ GitHub ]</a>
        </div>
      </div>
    );
  }
}

export default About;
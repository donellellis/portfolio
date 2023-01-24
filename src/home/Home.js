import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="colorBlock1">
          <div className='home-text-area'>
          <h1 className="home-title">Amuse-bouche.</h1>
          <h2 className="home-subtitle">I’m Donell, a frontend engineer and art + design enthusiast building digital products.</h2>
          <div className="home-cta">
            <a className="home-link-ghost" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/donell-ellis/">LinkedIn</a>
            <a className="home-link" target="_blank" rel="noopener noreferrer" href="https://github.com/donellellis">GitHub</a>
          </div>
          </div>
        </div>
        <div className="colorBlock2"></div>
      </div>
    );
  }
}

export default Home;

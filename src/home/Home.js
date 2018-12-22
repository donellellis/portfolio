import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="colorBlock1"></div>
          <div className="textOverlay">
            <h1 className="greeting">hello<span className="yellowChar">!</span></h1>
            <h2 className="grayChar">[ a portfolio ]</h2>
          </div>
        <div className="colorBlock2"></div>
      </div>
    );
  }
}

export default Home;

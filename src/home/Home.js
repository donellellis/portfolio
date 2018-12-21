import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="colorBlock1"></div>
        <h1 className="greeting">he<span className="grayChar">\n</span><br></br>llo<span className="yellowChar">!</span></h1>
        <div className="colorBlock2"></div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';


class FullscreenVR extends Component {
  render() {

    return (
    <a-scene>
        <a-assets>
        <img id="moonshot" crossorigin="anonymous" alt="moonshot fullscreen panorama" src="https://i.imgur.com/WI4uGQ7.jpg"></img>
        </a-assets>
        <a-sky src="#moonshot"></a-sky>
    </a-scene>      
    );
  }
}

export default FullscreenVR;
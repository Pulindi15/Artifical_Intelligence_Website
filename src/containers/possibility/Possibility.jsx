import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="art_int__possibility section__padding" id="possibility">
    <div className="art_int__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="art_int__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Experience the Future <br /> Step into Virtual Reality</h1>
      <p>Virtual Reality (VR) is an immersive technology that creates a simulated environment, allowing users to experience and interact with a 3D world that feels real. By using VR headsets and sometimes additional sensory equipment, users are transported into a variety of virtual settings, ranging from realistic recreations of real-world places to fantastical landscapes that defy the laws of physics.</p>
    </div>
  </div>
);

export default Possibility;
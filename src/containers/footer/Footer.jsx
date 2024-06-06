import React from 'react';
import art_intLogo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="art_int__footer section__padding">
    <div className="art_int__footer-heading">
      <h1 className="gradient__text">Empowering Tomorrow with AI-driven Solutions Today</h1>
    </div>

    <div className="art_int__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="art_int__footer-links">
      <div className="art_int__footer-links_logo">
        <img src={art_intLogo} alt="art_int_logo" />
        <p>Design by Pulindi Dhanesha <br/> <i>Refered from Youtube (javascriptmastery)</i>, <br /> All Rights Reserved</p>
      </div>
      <div className="art_int__footer-links_div">
        <h4>Links</h4>
        <p>Home</p>
        <p>What is AI</p>
        <p>Open AI</p>
        <p>Case Studies</p>
        <p>Blog</p>
      </div>
      <div className="art_int__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="art_int__footer-links_div">
        <h4>Get in touch</h4>
        <p>Company Name</p>
        <p>+00 00000 00000</p>
        <p>name@company.com</p>
      </div>
    </div>

    <div className="art_int__footer-copyright">
      <p>@2024 Artifical Intelligence. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
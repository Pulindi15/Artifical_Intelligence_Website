import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatAI.css';

const WhatAI = () => (
  <div className="art_int__whatart_int section__margin" id="wart_int">
    <div className="art_int__whatart_int-feature">
      <Feature title="What is AI ?" text="Artificial Intelligence (AI) is a branch of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks include understanding natural language, recognizing patterns, solving problems, and making decisions." />
    </div>
    <div className="art_int__whatart_int-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href='#blog'>Explore the Library</a></p>
    </div>
    <div className="art_int__whatart_int-container">
      <Feature title="Healthcare" text="Machine learning algorithms analyze large datasets to identify patterns and predict diseases, helping doctors make more accurate diagnoses and recommend tailored treatment options." />
      <Feature title="E-commerce" text="AI is transforming the e-commerce landscape by providing personalized shopping experiences, optimizing pricing strategies, and predicting customer behavior." />
      <Feature title="Cybersecurity" text="AI plays a crucial role in strengthening cybersecurity defenses against evolving threats such as malware, phishing attacks, and data breaches." />
    </div>
  </div>
);

export default WhatAI;
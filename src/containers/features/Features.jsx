import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Machine Learning',
    text: 'A subset of AI that involves training algorithms to make predictions or decisions based on data. ML models can learn and improve from experience without being explicitly programmed for each specific task.',
  },
  {
    title: 'Natural Language Processing',
    text: 'The ability of machines to understand, interpret, and respond to human language in a way that is both meaningful and useful. Applications include chatbots, language translation, and sentiment analysis.',
  },
  {
    title: 'Computer Vision',
    text: 'The capability of machines to interpret and make decisions based on visual input from the world, such as images and videos. This includes facial recognition, object detection, and medical imaging analysis.',
  },
  {
    title: 'Robotics',
    text: 'The design and creation of robots that can perform tasks autonomously or semi-autonomously. Robotics often incorporates AI to enhance the robots ability to interact with and respond to its environment.',
  },
];

const Features = () => (
  <div className="art_int__features section__padding" id="features">
    <div className="art_int__features-heading">
      <h1 className="gradient__text">Artificial Intelligence is a transformative force reshaping industries, enhancing human capabilities, and paving the way for intelligent systems to collaborate with human ingenuity.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="art_int__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
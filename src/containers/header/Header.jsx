import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => (
  <div className="art_int__header section__padding" id="home">
    <div className="art_int__header-content">
      <h1 className="gradient__text">The Power of AI</h1>
      <p>Artificial Intelligence (AI) is the simulation of human intelligence in machines programmed to think and learn like humans. It encompasses various technologies such as machine learning, natural language processing, robotics, and computer vision.</p>

      <div className="art_int__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="art_int__header-content__people">
        <img src={people} alt='people'/>
        <p>2000+ Subscibers have joined us</p>
      </div>
    </div>

    <div className="art_int__header-image">
      <img src={ai} alt='ai'/>
    </div>
  </div>
);

export default Header;
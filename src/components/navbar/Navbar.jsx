import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="art_int__navbar">
      <div className="art_int__navbar-links">
        <div className="art_int__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="art_int__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wart_int">What is AI?</a></p>
          <p><a href="#possibility">VR</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="art_int__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="art_int__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="art_int__navbar-menu_container scale-up-center">
          <div className="art_int__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wart_int">What is art_int?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="art_int__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
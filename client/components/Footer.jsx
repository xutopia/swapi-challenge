import React from 'react';
import github from '../assets/GitHub-Mark-64px.png';

const Footer = (props) => {
  return (
    <div>
      <h3>Made with &hearts;</h3>
      <a
        href="https://github.com/xutopia/swapi-challenge"
      >
        <img src={github} alt="github"/>
      </a>
    </div>
  );
}



export default Footer;

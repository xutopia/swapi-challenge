import React from 'react';
import github from '../assets/GitHub-Mark-Light-64px.png';

const Footer = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h3 style={{color: 'white'}}>Made with &hearts;</h3>
      <a
        href="https://github.com/xutopia/swapi-challenge"
      >
        <img src={github} alt="github"/>
      </a>
    </div>
  );
}



export default Footer;

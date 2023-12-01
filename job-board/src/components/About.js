import React from 'react';
import trotzImage from './KTrotz.JPG';

const About = () => {
  return (
    <div>
      <h2 id='aboutUs'>About Us</h2>
      <p>This is a simple job board application designed to display open jobs for minorities.</p>
      <div class = "img-container">
        <img src={trotzImage} alt="Binary" width="450" height="580" />
      </div>
    </div>
  );
};

export default About;
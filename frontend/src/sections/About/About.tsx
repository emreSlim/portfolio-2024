import React from 'react';
import './style.css';

export const About = () => {
  return (
    <section id="about" className="about-container">
      <img
        className="profile-image"
        src="https://via.placeholder.com/150"
        alt="profile"
      />
      <div className="about-content">
        <h3 className="about-title">About Me</h3>
        <p className="about-description">
          Hi, my name is Imran and I am from Ghaziabad (UP) India. I have been
          learning frontend web developing , cross platform app developing ,
          functional and object-oriented programming for last 1+ years and I am
          so passionate about how I can picture, program and write code and make
          website and app according to user-story. I always have been curious
          about how things work and how I can manipulate those processes
          according to my curiosity. For more details about myself, please check
          out my resume below.
        </p>
      </div>
    </section>
  );
};

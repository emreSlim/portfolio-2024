import React from 'react';
import './style.css';

export const Header = () => {
  return (
    <header className="header-container">
      <ul className="header-container">
        <li>
          <a className="header-link" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a className="header-link" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="header-link" href="#experience">
            EXPERIENCE
          </a>
        </li>
        <li>
          <a className="header-link" href="#projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="header-link" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </header>
  );
};

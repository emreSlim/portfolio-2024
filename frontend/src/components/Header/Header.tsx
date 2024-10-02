import React from 'react';
import './style.css';
import { SmoothScrollingLink } from '../Link';

export const Header = () => {
  return (
    <header className="header-container">
      <ul className="header-links">
        <li>
          <SmoothScrollingLink className="header-link" targetId="#home">
            HOME
          </SmoothScrollingLink>
        </li>
        <li>
          <SmoothScrollingLink className="header-link" targetId="#about">
            ABOUT
          </SmoothScrollingLink>
        </li>
        <li>
          <SmoothScrollingLink className="header-link" targetId="#experience">
            EXPERIENCE
          </SmoothScrollingLink>
        </li>
        <li>
          <SmoothScrollingLink className="header-link" targetId="#projects">
            PROJECTS
          </SmoothScrollingLink>
        </li>
        <li>
          <SmoothScrollingLink className="header-link" targetId="#contact">
            CONTACT
          </SmoothScrollingLink>
        </li>
      </ul>
    </header>
  );
};

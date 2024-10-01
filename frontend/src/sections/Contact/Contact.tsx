import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h3 className="contact-title">Contact Me</h3>
      <ul className="contact-links">
        {['Email', 'Phone', 'Address'].map((item, index) => (
          <li key={index}>
            <span className="contact-link">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

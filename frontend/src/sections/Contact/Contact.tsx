import React from 'react';
import './style.css';
import { MyProfile } from 'src/interfaces';
import { Loader } from 'src/components';

interface ContactProps {
  myProfile?: MyProfile;
}

export const Contact: React.FC<ContactProps> = ({ myProfile }) => {
  return (
    <section id="contact" className="contact-container">
      <h3 className="contact-title">Contact Me</h3>
      {myProfile == null ? (
        <Loader />
      ) : (
        <ul className="contact-links">
          <li>
            <h4>Phone :</h4>
            <a href={`tel:${myProfile.phone}`} className="contact-link">
              {myProfile.phone}
            </a>
          </li>
          <li>
            <h4>Email :</h4>
            <a href={`mailto:${myProfile.email}`} className="contact-link">
              {myProfile.email}
            </a>
          </li>
        </ul>
      )}
    </section>
  );
};

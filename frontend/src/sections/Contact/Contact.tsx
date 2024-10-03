import React from 'react';
import './style.css';
import { MyProfile } from 'src/interfaces';
import { Loader } from 'src/components';
import { FaPhone } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

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
            <FaPhone /> :
            <a href={`tel:${myProfile.phone}`} className="contact-link">
              {myProfile.phone}
            </a>
          </li>
          <li>
            <MdAlternateEmail /> :
            <a href={`mailto:${myProfile.email}`} className="contact-link">
              {myProfile.email}
            </a>
          </li>
        </ul>
      )}
    </section>
  );
};

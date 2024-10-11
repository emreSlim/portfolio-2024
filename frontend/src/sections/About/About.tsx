import React from 'react';
import './style.css';
import { MyProfile } from 'src/interfaces';
import { Loader } from 'src/components';

interface AboutProps {
  myProfile: MyProfile | undefined;
}

export const About: React.FC<AboutProps> = ({ myProfile }) => {
  return (
    <section id="about" className="left-right-container">
      {myProfile == null ? (
        <Loader size={100} />
      ) : (
        <>
          <img
            className="profile-image"
            src={myProfile.imageUrl}
            alt="profile"
          />
          <div className="about-content">
            <h3 className="about-title">About Me</h3>
            {myProfile.about.split('\n').map((line, index) => (
              <p className="about-description">{line}</p>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

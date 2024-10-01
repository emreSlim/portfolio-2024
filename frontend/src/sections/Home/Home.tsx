import { Simulation } from 'colliding-balls-simulation';
import React from 'react';
import './style.css';
import { MyProfile } from 'src/interfaces';
import { Loader } from 'src/components';

interface HomeProps {
  myProfile: MyProfile | undefined;
}

export const Home: React.FC<HomeProps> = ({ myProfile }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  React.useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const simulation = new Simulation(canvas, {
        radiusMax: 10,
        radiusMin: 5,
        tail: false,
      });
      simulation.init();
    }
  }, []);

  return (
    <section
      id="home"
      className="home-container"
      style={{
        width: window.innerWidth - 10,
        height: window.innerHeight - 40,
      }}
    >
      <canvas
        className="canvas-bg"
        ref={canvasRef}
        width={window.innerWidth - 10}
        height={window.innerHeight}
      ></canvas>
      {myProfile == null ? (
        <Loader size={100} />
      ) : (
        <HomeContent myProfile={myProfile} />
      )}
    </section>
  );
};

interface HomeContentProps {
  myProfile: MyProfile;
}

const HomeContent: React.FC<HomeContentProps> = ({ myProfile: mp }) => {
  return (
    <>
      <h1 className="title">
        {mp.firstName} ({mp.nickName})
      </h1>
      <p className="intro">{mp.introduction}</p>
      <ul className="profile-links">
        {mp.professionalProfiles.map((item, index) => (
          <li key={index}>
            <a
              className="profile-link"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.platformName}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

import React from 'react';
import './App.css';
import { Header } from 'src/components';
import { About, Contact, Experience, Home, Projects } from 'src/sections';
import { MyProfile } from 'src/interfaces';
import { Service } from 'src/services';

function App() {
  const [myProfile, setMyProfile] = React.useState<MyProfile>();

  React.useEffect(() => {
    Service.getMyProfile().then((response) => {
      setMyProfile(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Home myProfile={myProfile} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

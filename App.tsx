import React, {useEffect, useState} from 'react';
import Splash from './src/components/screens/splash/Splash';
import Users from './src/components/screens/users/Users';
import {Navigation} from './src/components/navigation/Navigation';
import {UserProvider} from './UserContext';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      setShowLanding(true);
    }, 3000);
  }, []);

  const handleButtonClick = () => {
    setShowLanding(false);
  };

  return (
    <UserProvider>
      {showSplash ? (
        <Splash />
      ) : showLanding ? (
        <Users callback={handleButtonClick} />
      ) : (
        <Navigation />
      )}
    </UserProvider>
  );
};

export default App;

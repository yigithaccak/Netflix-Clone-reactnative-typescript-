import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './BottomTabs';

export const Navigation = () => {
  return (
    <NavigationContainer>
        <BottomTabs />
    </NavigationContainer>
  );
};

import React from 'react';
import { View, useColorScheme } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';
import {StatusBar} from 'react-native';

const App = () => {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};



export default App;

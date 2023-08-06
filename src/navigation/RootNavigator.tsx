import AuthStackNavigator from './AuthStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

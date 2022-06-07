import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import CodePush from 'react-native-code-push';

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START}


const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default CodePush(codePushOptions)(App)
;

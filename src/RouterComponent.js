import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Header from './components/Test';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Login" initial />
    </Router>
  );
};
//<Scene key="login" component={LoginForm} title="Login" />

export default RouterComponent;
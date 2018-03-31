

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import AuthScreen from './src/Auth/Auth'
import Login from './src/LoginSignup/Login'
import Signup from './src/LoginSignup/Signup'

import { Navigation } from 'react-native-navigation';
import Idea from './src/Idea/Idea';

Navigation.registerComponent('navApp.auth', () => AuthScreen);
Navigation.registerComponent('navApp.login', () => Login);
Navigation.registerComponent('navApp.signup', () => Signup);
Navigation.registerComponent('navApp.idea', () => Idea);


Navigation.startSingleScreenApp({
  screen: {
    screen: 'navApp.auth',
    title: 'Login'
  }
})
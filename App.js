

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import AuthScreen from './src/Auth/Auth'

import { Navigation } from 'react-native-navigation';

Navigation.registerComponent('navApp.auth', () => AuthScreen)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'navApp.auth',
    title: 'Login'
  }
})
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import DefaultInput from './components/UI/DefaultInput/DefaultInput'

export default class App extends Component{

  render() {
    return (
      <ImageBackground style={styles.container} source={require('./images/abstractwp.jpg')}>
      <Text style={styles.headingStyle}>Register</Text>
        <View style= {styles.inputContainer}>
          <DefaultInput placeholder='Username' />
          <DefaultInput placeholder='Email' />
          <DefaultInput placeholder='Password' />
        </View>       
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Lets go</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input : {
    width: '100%',
    height: 35,
    borderColor: 'white',
    borderWidth: 1.1,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    textAlign: 'center'
  },
  buttonContainer: {

    backgroundColor: 'steelblue',
    padding:5,
    borderColor: 'powderblue',
    borderWidth: 1,
    width: '60%',
    borderRadius: 10,
    margin: 10,
    height: 35.

  },
  textStyle:{
    textAlign: 'center',
    color: '#fff'
  },
  headingStyle: {
    fontFamily: 'helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 5
  }
});

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

export default class App extends Component{

  // changeName = (event) => {
  //   alert(event);
  //   console.log(event.target)
  // }

  render() {
    return (
      <ImageBackground style={styles.container} source={require('./images/abstractwp.jpg')}>
      <Text style={styles.headingStyle}>Register</Text>
        <View style= {styles.inputContainer}>
          <TextInput placeholder="Full name" style={styles.input} underlineColorAndroid="transparent" placeholderTextColor="white"
/>
          <TextInput placeholder="Email" style={styles.input} placeholderTextColor="white"/>
          <TextInput placeholder="Password" style={styles.input} secureTextEntry  placeholderTextColor="white"/>
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

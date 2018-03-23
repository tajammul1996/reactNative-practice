import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

export default class App extends Component{

  // changeName = (event) => {
  //   alert(event);
  //   console.log(event.target)
  // }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.headingStyle}>Register</Text>
        <View style= {styles.inputContainer}>
          <TextInput placeholder="Full name" style={styles.input} underlineColorAndroid="transparent"/>
          <TextInput placeholder="Email" style={styles.input}/>
          <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        </View>       
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Lets go</Text>
        </TouchableOpacity>
      </View>
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
    height: 40,
    borderColor: 'steelblue',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    textAlign: 'center'
  },
  buttonContainer: {

    backgroundColor: '#d6d7da',
    padding:5,
    borderColor: 'powderblue',
    borderWidth: 1,
    width: '60%',
    borderRadius: 10,
    margin: 10,
    height: 35
  },
  textStyle:{
    textAlign: 'center',
  },
  headingStyle: {
    fontFamily: 'helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'steelblue',
    padding: 5
  }
});

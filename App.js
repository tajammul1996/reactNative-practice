import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class App extends Component{

  changeName = (event) => {
    alert(event);
    console.log(event.target)
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Register</Text>
        <View style= {styles.inputContainer}>
          <TextInput placeholder="Full name" style={styles.input} onChangeText={this.changeName} />
          <TextInput placeholder="Email" style={styles.input}/>
          <TextInput placeholder="Password" style={styles.input}/>
          <Button title="Lets go"/>
        </View>
        
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
    height: 40
  }
});

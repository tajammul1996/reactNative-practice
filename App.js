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
      <View style={styles.container}>
        <Text>Hello</Text>
        <View style={styles.internalContainer}>
          <View  style={styles.textStyle}>
            <Text>hi</Text>
            <Text>hello</Text>
            <Text>there</Text>
            <Text>this</Text>
            <Text>is</Text>
            <Text>cs50</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#af33ff',
  },
  internalContainer: {
    
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    
  },

  textStyle : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  }
});

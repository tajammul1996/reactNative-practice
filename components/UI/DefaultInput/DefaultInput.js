import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput 
       style={styles.input} 
       placeholderTextColor="white"
       underlineColorAndroid="transparent"
       {...props}
    />
);

const styles = StyleSheet.create({
  input : {
    width: '100%',
    height: 35,
    borderColor: 'white',
    borderWidth: 1.1,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    textAlign: 'center'
    }
  });

export default defaultInput;
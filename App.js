import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.internalWrapper}>
          <View style= {styles.firstbox}>
            <Text style={styles.textStyle}>firstbox</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center' ,
    backgroundColor: '#FFF',
    backgroundColor: 'powderblue'
  },
  
  internalWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  firstbox: {
    flex:1,
    flexDirection: 'row',
    borderColor: 'black',
    backgroundColor: 'steelblue',
    borderWidth: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },

  textStyle: {
    color: '#fff',
    padding: 15,
  }
});

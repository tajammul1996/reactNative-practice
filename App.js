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
import { connect } from 'react-redux';
import { increment, decrement, reset } from './src/store/actions/index'

import DefaultInput from './components/UI/DefaultInput/DefaultInput'

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  increment1 = () => {
    this.props.incrementz()
  }

  decrement1 = () => {
    this.props.decrementz()
  }

  reset1 = () => {
    this.props.resetz()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerDesign}>
            <Text style={styles.textStyle}>{this.props.count}</Text>
              <View style={styles.internalWrapper}>
                <View style={styles.internalFlex}>
                  <Button onPress={this.props.incrementz} title = '+'>+</Button>
                  <Button onPress={this.decrement1} title = '-'>-</Button>
                  <Button onPress={this.reset1} title = '0'>0</Button>
                </View>
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
  textStyle : {
    fontSize: 50,
    fontWeight: 'bold',
  },
  internalWrapper: {
    height: 50,
    width: 100,
  },
  internalFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerDesign: {
    backgroundColor: '#eee'
  }
});

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementz: () => dispatch(increment()),
    decrementz: () => dispatch(decrement()),
    resetz: () => dispatch(reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
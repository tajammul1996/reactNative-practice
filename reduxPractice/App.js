import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement, reset, changeText } from './src/store/actions/index'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      toggle: 0
    }
  }

  _changeTheValue = () => {
    if(!this.state.toggle){
      this.props.changeText('counter')
      this.setState({ toggle: 1})
    }else{
      this.props.changeText('changedddd')
      this.setState({ toggle: 0})
    }
  }

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this._changeTheValue}> 
        <Text>{this.props.text}</Text>
       </TouchableOpacity>
       <Text>{this.props.count}</Text>
       <Button title='inc' onPress={this.props.increment}>inc</Button>
       <Button title='dec' onPress={this.props.decrement}>dec</Button>
       <Button title='0' onPress ={this.props.reset}>0</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    text: state.counter.text,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    changeText: (value) => dispatch(changeText(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
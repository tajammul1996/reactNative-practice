import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native'

import startTabs from '../startTabNav/startTabNav'


export default class AuthScreen extends Component {

    loginHandler = () => {
        startTabs();
    }

    render() {
        return(
            <View>
                <Text>
                    AuthScreen
                </Text>
                <Button onPress={this.loginHandler} title="Authentication screen">Authentication</Button>
            </View>
        );
    }
}
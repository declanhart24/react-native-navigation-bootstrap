/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { registerScreens } from './screens';

class react_native_navigation_bootstrap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit app.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

registerScreens(); // this is where you register all of your app's screens

var defaultTabs = []

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Profile',
      screen: 'Profile', // this is a registered name for a screen
      icon: require('./assets/icon.png'),
      title: 'Profile'
    },
    {
      label: 'Settings',
      screen: 'Settings',
      icon: require('./assets/icon.png'),
      title: 'Settings'
    }
  ],
});

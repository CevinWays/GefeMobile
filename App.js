/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import Splash from './src/components/Splash';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Dashboard from './src/components/Dashboard';

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Splash : Splash,
  Login : Login,
  Register : Register,
  Dashboard : Dashboard,
},
{
  initialRouteName: 'Splash',
})

const AppContainer = createAppContainer(AppStackNavigator);

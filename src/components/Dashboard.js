import React, {Component} from 'react';
import {Image} from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Users from './Users';
import Vehicles from './Vehicles';
import Home from './Home';
import MyAccount from './MyAccount';

export default class Dashboard extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
      return (
        <AppContainer/>
      );
    }
  }

const TabScreens = createBottomTabNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon: ({tintColor}) => (
                <Image source={require('../assets/home.png')}
                style={{width:24,height:24, tintColor: tintColor}} />
            )
        }
    },
    Users:{
        screen: Users,
        navigationOptions:{
            tabBarLabel:'Users',
            tabBarIcon: ({tintColor}) => (
                <Image source={require('../assets/users.png')}
                style={{width:24,height:24, tintColor: tintColor}} />
            )
        }
    },
    Vehicles:{
        screen: Vehicles,
        navigationOptions:{
            tabBarLabel:'Vehicle',
            tabBarIcon: ({tintColor}) => (
                <Image source={require('../assets/vehicles.png')}
                style={{width:24,height:24, tintColor: tintColor}} />
            )
        }
    },
    Account:{
        screen: MyAccount,
        navigationOptions:{
            tabBarLabel:'Account',
            tabBarIcon: ({tintColor}) => (
                <Image source={require('../assets/account.png')}
                style={{width:24,height:24, tintColor: tintColor}} />
            )
        }
    },
},{
    tabBarOptions:{
        activeTintColor:'#6C63FF',
        labelStyle: {
            fontSize: 12,
            marginBottom:10,
            fontWeight:"bold",
        },
        style:{
            elevation:5,
            height:60
        }
    }
})

const AppContainer = createAppContainer(TabScreens);
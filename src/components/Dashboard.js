import React, {Component} from 'react';
import {Button,Image, View, Text, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Users from './Users';
import Vehicles from './Vehicles';
import Home from './Home';

class Dashboard extends Component {
    static navigationOptions = {
        title : 'GEFE',
        headerLeft : null,
    };
    render(){
        return(
            <MyApp />
        )
    }
}

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Home,
    },
    Users: {
      screen: Users,
    },
    Vehicles: {
      screen: Vehicles,
    },
});
const MyApp = createAppContainer(MyDrawerNavigator);

export default Dashboard;

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 70
    },
    imgsplash: {
        width: 300,
        height: 250,
        marginTop: 10,
    },
    titleFont:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
    },
    titleText:{
        fontSize: 14,
        textAlign: 'center',
    },
    buttonLogin:{
        fontSize: 14,
        textAlign: 'center',
        marginTop: 50,
    },
    buttonNext:{
        marginTop: 150,
    },
    inputUser: {
        marginBottom:8,
        height: 45,
        borderColor: "#E0E0E0",
        backgroundColor: "#FAFAFA",
        borderRadius: 8,
    }
});
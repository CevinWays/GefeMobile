import React, {Component} from 'react';
import {Button,Image, View, Text, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

class Home extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleFont}>Home</Text>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 20,
    },
    imgsplash: {
        width: 300,
        height: 250,
        marginTop: 10,
    },
    titleFont:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginStart: 16,
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
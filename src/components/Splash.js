import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import {Button} from 'react-native';
import { black } from 'ansi-colors';

class Splash extends Component {
    render(){
        return(
            <View style={styles.mainbody} >
                <Image style={styles.imgsplash} source={require('../assets/splash1.png')}></Image>
                <Text style={styles.titleFont}>Welcome To Gefe</Text>
                <Text style={styles.titleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor</Text>
                <View style={styles.buttonNext}>
                    <Button title="Next" color="#6C63FF"></Button>
                </View>
            </View>
        )
    }
}

export default Splash;

const styles = StyleSheet.create({
    mainbody: {
      marginTop: 30,
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 70
    },
    imgsplash: {
        width: 300,
        height: 290,
        marginTop: 20,
    },
    titleFont:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    titleText:{
        fontSize: 14,
        textAlign: 'center',
    },
    buttonNext:{
        marginTop: 100,
    }
  });
import React, {Component} from 'react';
import {Button, View, Text, Image, StyleSheet} from 'react-native'

class Splash extends Component {
    static navigationOptions = {
        header : null
    };
    render(){
        return(
            <View style={styles.container} >
                <Image style={styles.imgsplash} source={require('../assets/splash1.png')}></Image>
                <Text style={styles.titleFont}>Welcome To Gefe</Text>
                <Text style={styles.titleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor</Text>
                <View style={styles.buttonNext}>
                    <Button title="Next" color="#6C63FF" 
                    onPress={() => this.props.navigation.navigate('Login')}></Button>
                </View>
            </View>
        )
    }
}

export default Splash;

const styles = StyleSheet.create({
    container: {
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
        marginTop: 150,
    },
  });
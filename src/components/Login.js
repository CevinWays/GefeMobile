import React, {Component} from 'react';
import {Button, View, Text,Image, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component {
    static navigationOptions = {
        header : null
    };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleFont}>Sign Yourself</Text>
                <Image style={styles.imgsplash} source={require('../assets/login.png')}></Image>
                <TextInput style={styles.inputUser}>Username</TextInput>
                <TextInput style={styles.inputUser}>Password</TextInput>
                <Button title="Login" color="#6C63FF"></Button>
                <Text style={styles.buttonRegister} onPress={() => this.props.navigation.navigate('Register')}>Don't have an account? Register</Text>
            </View>
        )
    }
}

export default Login;

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
    buttonRegister:{
        fontSize: 14,
        textAlign: 'center',
        marginTop: 100,
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
import React, {Component} from 'react';
import {Button,Image, View, Text, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';


class Register extends Component {
    static navigationOptions = {
        header : null
    };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleFont}>Make an Account</Text>
                <Image style={styles.imgsplash} source={require('../assets/register.png')}></Image>
                <TextInput style={styles.inputUser}>Username</TextInput>
                <TextInput style={styles.inputUser}>Password</TextInput>
                <TextInput style={styles.inputUser}>Confirm Password</TextInput>
                <Button title="Register" color="#6C63FF"></Button>
                <Text style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Login')}>Already have an account? Login</Text>
            </View>
        )
    }
}

export default Register;

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
import React, {Component} from 'react';
import {Image, View, Text, StyleSheet, Button, Alert} from 'react-native'

class Home extends Component {
    _onPressButton() {
        Alert.alert('Dalam Perbaikan!')
    }
    render(){
        return(
            <View style={styles.mainBody}>
                <Text style={styles.titleFont}>Home</Text>
                <Image source={require('../assets/undraw_home.png')}
                style={styles.imgsplash}/>
                <Text style={styles.titleSubtitle}>GEFE Secure Your Day</Text>
                <Text style={styles.titleText}>We provide secure best for every vehicle that you have. 
                Every security tools that we have is the best in our class with good and high quality of technology. 
                So why take so long, sign your vehicles now!</Text>
                <View style={styles.container}>
                    <Button
                    onPress={this._onPressButton}
                    title="+ Sign Vehicles"
                    color="#6C63FF"
                    accessibilityLabel="Learn more about this purple button"/>
                </View>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    mainBody:{
        flex:1,
        marginTop:20,
    },
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerRow:{
        flexDirection: 'row',
        marginStart:16,
    },
    imgsplash: {
        width: 280,
        height: 280,
        marginTop: 10,
        marginStart:32
    },
    titleFont:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginStart: 16,
    },
    titleSubtitle:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleText:{
        fontSize: 14,
        textAlign: 'center',
        padding: 16, 
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
import React, {Component} from 'react';
import {Button,Image, View, Text, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';


class MyAccount extends Component {
    render(){
        return(
            <View style={styles.mainBody}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.titleFont}>MyAccount</Text>
                    </View>
                    <View style={styles.containerRow}>
                        <Image style={styles.imgStyle} source={require('../assets/userImage.jpg')}/>
                        <View style={styles.container}>
                            <Text style={styles.titleUsername}>Cevin Ways</Text>
                            <Text style={styles.titleUserjob}>Developer / Mahasiswa</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default MyAccount;

const styles = StyleSheet.create({
    mainBody:{
        marginTop:20,
    },
    container:{
        flexDirection: 'column'
    },
    containerRow:{
        flexDirection: 'row',
        marginStart:16
    },
    imgStyle: {
        width: 85,
        height: 85,
        marginTop: 20,
        borderRadius:60,
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
    },
    titleUsername:{
        fontSize: 18,
        fontWeight:'bold',
        marginTop:20,
        marginStart:16
    },
    titleUserjob:{
        fontSize: 14,
        fontWeight:'bold',
        marginTop:8,
        marginStart:16
    }
});
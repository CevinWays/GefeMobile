import React, {Component} from 'react';
import {Image, View, StyleSheet, ScrollView} from 'react-native'
import { Container, Content, List, ListItem, Text, Left, Right} from 'native-base';


class MyAccount extends Component {
    render(){
        return(
            <ScrollView style={styles.mainBody}>
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
                    <View>
                        <Container>
                            <Content>
                                <List>
                                    <ListItem>
                                        <Left>
                                            <Image source={require('../assets/profile.png')} 
                                            style={{width:24,height:24}}/>
                                            <Text style={styles.titleIcon}>Profile</Text>
                                        </Left>
                                        <Right>
                                            <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Image source={require('../assets/fingerprint.png')} 
                                            style={{width:24,height:24}}/>
                                            <Text style={styles.titleIcon}>FingerPrint</Text>
                                        </Left>
                                        <Right>
                                            <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Image source={require('../assets/password.png')} 
                                            style={{width:24,height:24}}/>
                                            <Text style={styles.titleIcon}>Password</Text>
                                        </Left>
                                        <Right>
                                            <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                        </Right>
                                    </ListItem>
                                </List>
                            </Content>
                        </Container>
                    </View>
            </ScrollView>
        )
    }
}

export default MyAccount;

const styles = StyleSheet.create({
    mainBody:{
        flex:1,
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
    },
    titleIcon:{
        marginStart:8,
    }
});
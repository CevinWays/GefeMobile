import React, {Component} from 'react';
import {View,Image, StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Text,Left, Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


class Users extends Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.titleFont}>List of Users</Text>
                <Container style={styles.container}>
                    <Content>
                        <List>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/profile.png')} 
                                    style={{width:24,height:24}}/>
                                    <Text style={styles.titleIcon}>Fariha</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                        style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/profile.png')} 
                                    style={{width:24,height:24}}/>
                                    <Text style={styles.titleIcon}>Bekti</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                        style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/profile.png')} 
                                    style={{width:24,height:24}}/>
                                    <Text style={styles.titleIcon}>Firda</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                        style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/profile.png')} 
                                    style={{width:24,height:24}}/>
                                    <Text style={styles.titleIcon}>Dinda</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                        style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/profile.png')} 
                                    style={{width:24,height:24}}/>
                                    <Text style={styles.titleIcon}>Anita</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                        style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </ScrollView>
        )
    }
}

export default Users;

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
    },
    titleIcon:{
        marginStart:8,
    }
});
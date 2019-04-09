import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native'
import { Container, Content, List, ListItem, Text, Left, Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


class Vehicles extends Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.titleFont}>List of Vehicles</Text>
                <Container style={styles.container}>
                    <Content>
                        <List>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/motor.png')} 
                                        style={{width:30,height:30}}/>
                                    <Text style={styles.imgIcon}>Vario</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/motor.png')} 
                                                style={{width:30,height:30}}/>
                                    <Text style={styles.imgIcon}>Beat</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/motor.png')} 
                                            style={{width:30,height:30}}/>
                                    <Text style={styles.imgIcon}>Mio</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/motor.png')} 
                                            style={{width:30,height:30}}/>
                                    <Text style={styles.imgIcon}>Shogun</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/car.png')} 
                                            style={{width:30,height:30}}/>
                                    <Text style={styles.imgIcon}>Xenia</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/car.png')} 
                                            style={{width:30,height:30}}/>
                                    <Text style={styles.imgIcon}>Innova</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../assets/arrow.png')} 
                                            style={{width:18,height:18}}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../assets/car.png')} 
                                            style={{width:30,height:30}}/>
                                    <Text style={styles.imgIcon}>Wuling</Text>
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

export default Vehicles;

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
    imgIcon:{
        marginStart:8,
    }
});
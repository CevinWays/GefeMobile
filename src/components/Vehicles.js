import React, {Component} from 'react';
import {Button,Image, View, StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Text} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


class Vehicles extends Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.titleFont}>List of Vehicles</Text>
                <Container style={styles.container}>
                    <Content>
                        <List>
                            <ListItem noIndent style={{ backgroundColor: "#C9C7FF" }}>
                                <Text>Vario</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Beat</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Mio</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Shogun</Text>
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
    }
});
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Logo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageBox}></View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Welcome to Addiflare
                    </Text>
                </View>
                <View style={{paddingTop:8}}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
                {this.props.text2 && <View style={{paddingTop:8}}>
                    <Text style={styles.text2}>{this.props.text2}</Text>
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBox: {
        width: 86,
        height: 86,
        borderRadius: 43,
        backgroundColor: '#FFF2CB'
    },
    heading: {
        color: '#581400',
        fontWeight: '600',
        fontSize: 16
    },
    headingContainer: {
        paddingTop: 20
    },
    text: {
        color: '#581400',
        fontSize: 14
    },
    text2: {
        color: '#581400',
        fontSize: 12
    },
  
});
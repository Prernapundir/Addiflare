import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default class Input extends Component {


    render() {
        return (
            <View>
                <TextInput
                    keyboardType={this.props.keyboardType}
                    style={styles.textInput}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='#CB9F68'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#FFF2CB',
        borderRadius: 20,
        height: 38,
        width: width * 85 / 100,
        paddingLeft: 25,
        fontSize: 13,
        color: '#CB9F68',
        alignItems: 'center',
    },
})
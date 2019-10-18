import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Button
} from 'react-native';
import Common from '../../components/CommonSignScreen/Common';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';



class SignIn extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <Logo text='Sign in to your Account' />
                <View style={{ paddingTop: 36 }} >
                    <Input placeholder='Enter your mobile number' keyboardType='phone-pad'/>
                </View>
                <Common text='Continue' userText='New User? Create Account' skipText='Skip Sign In'  />   
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default SignIn;
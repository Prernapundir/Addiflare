import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import Common from '../../components/CommonSignScreen/Common';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';



class SignIn2 extends Component {


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <Logo text='Sign Up to your Account' />
                <View style={{ paddingTop: 36 }} >
                    <Input placeholder='8077698988' keyboardType='phone-pad'/>
                    <View style={{ paddingTop: 10 }}>
                        <Input placeholder='Enter Password ' keyboardType='default'/>
                    </View>
                </View>
                <Common text='SignIn' userText='New User? Create Account' skipText='Skip Sign In' conditionalText='Forgot Password?'/>   
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

export default SignIn2;

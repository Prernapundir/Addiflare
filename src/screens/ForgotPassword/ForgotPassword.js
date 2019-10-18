import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import Common from '../../components/CommonSignScreen/Common';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';



class ForgotPassword extends Component {


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <Logo text='Sign In to your Account' text2='We have sent an OTP to your mobile number' />
                <View style={{ paddingTop: 36 }} >
                    <Input placeholder='8077698988' />
                    <View style={{ paddingTop: 10 }}>
                        <Input placeholder='Enter OTP ' />
                    </View>
                </View>
                <Common text='Submit'  conditionalText='Resend OTP' id='1'/>   
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


export default ForgotPassword;

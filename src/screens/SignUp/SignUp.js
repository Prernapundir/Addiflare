import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
} from 'react-native';
import Common from '../../components/CommonSignScreen/Common';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';


class SignUp extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <Logo text='Sign Up to your Account' />
                <View style={{ paddingTop: 36 }} >
                    <Input placeholder='Full Name' keyboardType='default'/>
                    <View style={{ paddingTop: 10 }}>
                        <Input placeholder='Mobile Number' keyboardType='phone-pad'/>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Input placeholder='Email' keyboardType='email-address'/>
                    </View>
                </View>
                <Common text='Sign Up' userText='Already a User? Sign in' skipText='Skip Sign Up' conditionalText='T&C Applied'/>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    
    backBtn:{
        left: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})

export default SignUp;
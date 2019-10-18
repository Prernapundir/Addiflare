import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import Common from '../../components/CommonSignScreen/Common';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';



class ConfirmPassword extends Component {


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <Logo text='Sign in to your Account' />
                <View style={{ paddingTop: 36 }} >
                    <Input placeholder='Enter New Password' />
                    <View style={{ paddingTop: 10 }}>
                        <Input placeholder='Confirm New Password' />
                    </View>
                </View>
                <Common text='Sign In' id='1'/>   
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


export default ConfirmPassword;
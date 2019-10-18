import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Text, TextInput,KeyboardAvoidingView } from 'react-native';
import TopHeader from '../../components/Header/TopHeader';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Profile extends Component {
    state = {
        data: {
            fname: '',
            lname:'',
            mobileNumber:'',
            email:''
            
        }
    }

    onChangeText = (name, value) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }))
    }

    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" enabled  style={{display:'flex',
                justifyContent: 'space-evenly',}}>
                <TopHeader text="Profile" />
                <View style={styles.container}>
                    <View style={styles.ImageContainer}>
                        <View style={styles.imageView}>
                            <Image source={require('../../../assets/camera.png')} style={styles.image} />
                        </View>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            value={this.state.data.name}
                            placeholder='First Name'
                            style={styles.textInput}
                            onChangeText={(text) => this.onChangeText('fname', text)}
                        />
                         <TextInput
                            value={this.state.data.name}
                            placeholder='Last Name'
                            style={styles.textInput}
                            onChangeText={(text) => this.onChangeText('lname', text)}
                        />
                         <TextInput
                            value={this.state.data.name}
                            placeholder='Email'
                            style={styles.textInput}
                            onChangeText={(text) => this.onChangeText('email', text)}
                        />
                         <TextInput
                            value={this.state.data.name}
                            placeholder='Phone Number'
                            style={styles.textInput}
                            onChangeText={(text) => this.onChangeText('mobileNumber', text)}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo: {

    },
    ImageContainer: {
        width: width,
        height: height * 30 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5
    },
    imageView: {
        backgroundColor: '#A77248',
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        justifyContent: 'flex-end',
    },
    image: {
        width: 30,
        height: 30,
        paddingLeft: 20
    },
    textInput: {
        fontSize: 16,
        alignItems: 'center',
        color: '#A77248',
        borderColor: '#581400',
        marginHorizontal: 10,
        borderBottomWidth: 1,
        width: width * 0.90,
        justifyContent: 'center',
        marginVertical: 10,
    },
    textInputContainer:{
        flexDirection:'column',
        
    }

})
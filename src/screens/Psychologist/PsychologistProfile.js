import React, { Component } from 'react';
import { View, Text, Dimensions, Image, ImageBackground, TouchableHighlight, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from "expo-image-picker";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import TopHeader from '../../components/Header/TopHeader';



export default class CommonFile extends Component {

    state = {}

    imagePickHandler = async () => {
        try {
            var result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                aspect: [4, 3],
                base64: true,
                quality: 0.5
            });


            this.setState({ image: result.uri });

        } catch (err) {
            alert("Something went wrong please try again later");
        }
        console.log(result.uri);
        if (!result.cancelled) {

            this.setState({ image: result.uri });
        } else if (!result) {
            alert("Something went wrong please try again later");
        }
    };

    changeNameHandler = () => {
        this.openDialog(true)
    }

        ;


    render() {
        const props = this.props.navigation;
        return (
            <View style={{backgroundColor:'#FFE598'}}>
                <TopHeader text='Profile' />
                <ImageBackground source={require('../../../assets/im2.png')} style={styles.image} >

                    <TouchableOpacity onPress={this.imagePickHandler} >
                        <View style={styles.circle}>
                            {this.state.image &&
                                <ImageBackground
                                    style={styles.circle}
                                    source={{ uri: this.state.image }}
                                    imageStyle={{ borderRadius: 110 / 2, position: 'absolute' }}
                                >
                                </ImageBackground>}
                            {this.state.image == null && <Image source={require('../../../assets/camera.png')} style={{ width: 40, height: 40, resizeMode: 'cover', marginBottom: 5, tintColor: '#FFE598' }} />}
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.heading}>{props.getParam('name')}</Text>
                    <View style={{ flexDirection: 'row', width: width * 0.80, justifyContent: 'space-between' }}>
                        <Text style={styles.text}>{props.getParam('education')}</Text>
                        <Text style={styles.text}>Psychologist</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: width * 0.80, justifyContent: 'space-between' }}>

                        <Text style={styles.text}>{props.getParam('age')}</Text>
                        <Text style={styles.text}>Your blog</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' ,width:width*0.90}}>
                        <Text style={styles.text}>{props.getParam('description')}</Text>
                    </View>
                    <Image style={{ width: 100, height: 100, resizeMode: 'cover' }} />
                </ImageBackground>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    activeButton: {
        width: 100,
        height: 30,
        backgroundColor: '#891B00',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle1: {
        width: 20, height: 20, borderRadius: 10, borderColor: '#581400', borderWidth: 1
    },
    circle2: {
        width: 20, height: 20, borderRadius: 10, backgroundColor: '#581400',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', marginBottom: 20,
        backgroundColor:'#FFE598'
    },
    image: {
        width,
        height,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        backgroundColor: '#581400',
        justifyContent: 'flex-end'
    },
    circl2: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,

    },
    heading: {
        fontWeight: 'normal',
        color: '#FFE598',
        fontSize: 26,
    },
    text: {
        color: '#FFE598',
        fontSize: 16
    },
    line: {
        borderWidth: 1,
        width: width * 0.90,
        borderColor: '#581400',
        marginVertical: 22
    },
    button: {
        width: 100,
        height: 30,
        backgroundColor: '#581400',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button2: {
        width: 100,
        height: 30,
        backgroundColor: '#581400',
        borderRadius: 50,
    },
    textInput: {
        fontSize: 16,
        alignItems: 'center',
        color: '#A77248',
        borderColor: '#581400',
        marginHorizontal: 10,
        borderBottomWidth: 1,
        width: width * 0.70,
        justifyContent: 'center',
        marginVertical: 10,
    },
    textInputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }
})
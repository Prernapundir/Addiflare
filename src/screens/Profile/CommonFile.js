import React, { Component } from 'react';
import { View, Text, Dimensions, Image, ImageBackground, TouchableHighlight, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from "expo-image-picker";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { Dialog } from 'react-native-simple-dialogs';
import TopHeader from '../../components/Header/TopHeader';


const data = ['Smoking', 'Drinking', 'Cocain', 'Heroine'];
const privacy = ['public', 'private']
export default class CommonFile extends Component {



    state = {
        data: {
            username: '@username',
            name: 'Your Name',
            email: 'Email-Id',
            mobilenumber: 'Phone Number',

        },
        image: null,
        active: [],
        active1:[]
    }

    componentDidMount = () => {
        var active = []
        for (let i = 0; i < data.length; i++) {
            active.push("false")
        }
        this.setState({ active })

        var active1 = []
        for (let i = 0; i < privacy.length; i++) {
            active1.push("false")
        }
        this.setState({ active1 })
    }

    renderData = () => {
        return data.map((data, i) => {
            return (
                <TouchableOpacity onPress={() => this.clickHandler(i)} key={i}>
                    {i < 3 && <View style={this.state.active[i] == 'true' ? styles.activeButton : styles.button}>
                        <Text style={styles.text}>{data}</Text>
                    </View>}
                </TouchableOpacity>
            )
        })
    }

    clickHandler = (index) => {
        var active = this.state.active

        for (let i = 0; i < data.length; i++) {
            if (i === index) {
                if (active[i] == 'false') {
                    active[i] = 'true'
                } else if (active[i] == 'true') {
                    active[i] = 'false'
                }
            }
        }
        this.setState({ active })

    }

    privacyHandler=(index)=>{
        var active1 = this.state.active1

        for(let i=0;i<privacy.length;i++){
            if(active1[i]=='true'){
                active1[i]='false'
            }
        }

        for (let i = 0; i < privacy.length; i++) {
            if (i === index) {
                if (active1[i] == 'false') {
                    active1[i] = 'true'
                } else if (active1[i] == 'true') {
                    active1[i] = 'false'
                }
            }
        }
        if(active1[0]=='true'){
            this.setState({ ...data }) 
            
        }else{
            this.setState({
                data:{
                    username: '@username',
                    name: 'Your Name',
                    email: 'Email-Id',
                    mobilenumber: 'Phone Number',
                },
                image:null
            })
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

    openDialog = show => {
        this.setState({ showDialog: show });
    };


    render() {
        return (
            <View >
                <TopHeader text='Profile'/>
                <ImageBackground source={require('../../../assets/im1.png')} style={styles.image} >

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

                    <TextInput style={styles.heading}
                        value={this.state.data.name}
                        onChangeText={(text) => this.onChangeText('name', text)}
                    >
                    </TextInput>
                    <View style={{ flexDirection: 'row', width: width * 0.80, justifyContent: 'space-between' }}>

                        <TextInput style={styles.text}
                            value={this.state.data.username}
                            onChangeText={(text) => this.onChangeText('username', text)}
                        >
                        </TextInput>
                        <Text style={styles.text} >Category</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: width * 0.80, justifyContent: 'space-between' }}>

                        <TextInput style={styles.text}
                            value={this.state.data.email}
                            onChangeText={(text) => this.onChangeText('email', text)}
                        >
                        </TextInput>
                        <Text style={styles.text}>Your blog</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: width * 0.80, justifyContent: 'space-between' }}>

                        <TextInput style={styles.text}
                            value={this.state.data.mobilenumber}
                            onChangeText={(text) => this.onChangeText('mobilenumber', text)}
                        >
                        </TextInput>
                        <TouchableOpacity onPress={this.changeNameHandler}>
                            <Image source={require('../../../assets/pencil.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: '#FFE598' }}>------Addiction Type-------</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.90, marginTop: 30 }}>
                        {this.renderData()}
                    </View>
                    <View style={styles.line}></View>
                    <Image  style={{ width: 100, height: 100, resizeMode: 'cover' }} />
                </ImageBackground>
                <Dialog
                    onTouchOutside={() => this.openDialog(false)}
                    visible={this.state.showDialog}
                    titleStyle={styles.modalTitle}
                    onRequestClose={() => this.openDialog(false)}
                    dialogStyle={styles.dialog}
                    animationType='fade'
                >
                    <View style={styles.textInputContainer}>

                        <TextInput
                            // value={this.state.data.name}
                            placeholder='Name'
                            style={styles.textInput}
                            onChangeText={(text) => this.onChangeText('name', text)}
                        />
                        <TextInput
                            // value={this.state.data.username}
                            placeholder='User Name'
                            style={styles.textInput}
                            onChangeText={(text) => this.onChangeText('username', text)}
                        />
                        <TextInput
                            // value={this.state.data.email}
                            placeholder='Email'
                            style={styles.textInput}
                            onChangeText={(text) => this.onChangeText('email', text)}
                        />
                        <TextInput
                            // value={this.state.data.mobilenumber}
                            placeholder='Phone Number'
                            style={styles.textInput}
                            onChangeText={(text) => this.onChangeText('mobilenumber', text)}
                            keyboardType='number-pad'
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {privacy.map((list, i) => {
                                return (
                                    <TouchableOpacity key={i} onPress={() => this.privacyHandler(i)} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={this.state.active1[i]=='true'?styles.circle2:styles.circle1}></View>
                                            <Text style={{ color: '#A77248', marginHorizontal: 20 }}>{list}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}

                        </View>
                    </View>
                </Dialog>
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
    circle1:{
        width: 20, height: 20, borderRadius: 10, borderColor: '#581400', borderWidth: 1 
    },
    circle2:{
        width: 20, height: 20, borderRadius: 10, backgroundColor: '#581400',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        // backgroundColor: '#581400',
        // justifyContent: 'flex-end'
    },
    heading: {
        fontWeight: 'normal',
        color: '#FFE598',
        fontSize: 24,
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
        color: '#581400',
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

    },dialog:{
        backgroundColor:'#FFF2CB',
    }
})
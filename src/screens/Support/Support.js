import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import TopHeader from '../../components/Header/TopHeader';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Support extends Component {

    _handleButtonPress2 = number => {
        Linking.openURL(`tel:${number}`);
    };

    render() {
        return (
            <View >
                <TopHeader text='Support' />
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{ width: width * 80 / 100, justifyContent: 'center', backgroundColor: '#FFF2CB', flexDirection: 'row', marginVertical: 15 }} >
                        <View style={{ width: width * 0.40, justifyContent: 'center', alignItems: 'center' }}>

                            <Image
                                style={{ width: 170, height: 40 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            </View>
                            <View style={{ width: width * 0.55, justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{color:'#581400'}}>Dr Manjeet Saini Hospital</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{ width: width * 80 / 100, justifyContent: 'center', backgroundColor: '#FFF2CB', alignItems: 'flex-start', flexDirection: 'row', marginVertical: 15 }} >
                        <View style={{ width: width * 0.40, justifyContent: 'center', alignItems: 'center' }}>

                            <Image
                                style={{ width: 170, height: 40 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            </View>
                            <View style={{ width: width * 0.55, justifyContent: 'center', alignItems: 'center' }}>

                            <Text  style={{color:'#581400'}}>Shri Gobind Foundation (R){'\n'}Drug Counselling and {'\n'}Rehabilitation Centre</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{ width: width * 80 / 100, justifyContent: 'center', backgroundColor: '#FFF2CB', alignItems: 'flex-start', flexDirection: 'row', marginVertical: 15 }} >
                        <View style={{ width: width * 0.40, justifyContent: 'center', alignItems: 'center' }}>

                            <Image
                                 style={{ width: 170, height: 40 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            </View>
                            <View style={{ width: width * 0.55, justifyContent: 'center', alignItems: 'center' }}>

                            <Text  style={{color:'#581400'}}>Vardaan life line Foundation{'\n'} Drug Counselling and {'\n'}rehab Center</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{ width: width * 80 / 100, justifyContent: 'center', backgroundColor: '#FFF2CB', alignItems: 'flex-start', flexDirection: 'row', marginVertical: 15 }} >
                        <View style={{ width: width * 0.40, justifyContent: 'center', alignItems: 'center' }}>

                            <Image
                               style={{ width: 170, height: 40 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            </View>
                            <View style={{ width: width * 0.55, justifyContent: 'center', alignItems: 'center' }}>
                            
                            <Text  style={{color:'#581400'}}>Naya Jeevan Drug Counselling {'\n'}& Rehablitation Center</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{ width: width * 80 / 100, justifyContent: 'center', backgroundColor: '#FFF2CB', alignItems: 'flex-start', flexDirection: 'row', marginVertical: 15 }} >
                        <View style={{ width: width * 0.40, justifyContent: 'center', alignItems: 'center' }}>

                            <Image
                                 style={{ width: 170, height: 40 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            </View>
                            <View style={{ width: width * 0.55, justifyContent: 'center', alignItems: 'center' }}>

                            <Text  style={{color:'#581400'}}>New Hope Rehabilitation {'\n'}& Treatment Centre</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{ width: width * 80 / 100, justifyContent: 'center', backgroundColor: '#FFF2CB', alignItems: 'center', flexDirection: 'row', marginVertical: 15 }} >
                            <View style={{ width: width * 0.40, justifyContent: 'center', alignItems: 'center' }}>

                                <Image
                                   style={{ width: 170, height: 40 }}
                                    source={require('../../../assets/Call2.png')}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ width: width * 0.55, justifyContent: 'center', alignItems: 'center' }}>

                                <Text  style={{color:'#581400'}}>Navyug Drug Counseling {'\n'}& Rehabilitation Centre</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{ width: width * 80 / 100, justifyContent: 'center', backgroundColor: '#FFF2CB', alignItems: 'flex-start', flexDirection: 'row', marginVertical: 15, alignItems: 'center' }} >
                            <View style={{ width: width * 0.40, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 170, height: 40 }}
                                    source={require('../../../assets/Call2.png')}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ width: width * 0.55, justifyContent: 'center', alignItems: 'center' }}>
                                <Text  style={{color:'#581400'}}>Shri Gobind Foundation (R) {'\n'}Counselling and Rehabilitation {'\n'} Centre></Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFF2CB'
    }
})

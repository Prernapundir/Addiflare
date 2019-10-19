import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image,Linking } from 'react-native';
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
                        <View style={{width:width*80/100,justifyContent: 'center', backgroundColor:'#FFF2CB',flexDirection:'row',marginVertical:15}} >
                            <Image
                                style={{ width: 200, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text>Dr Manjeet Saini Hospital</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{width:width*80/100,justifyContent: 'center', backgroundColor:'#FFF2CB',alignItems:'flex-start',flexDirection:'row',marginVertical:15}} >
                            <Image
                                style={{ width: 200, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text>Shri Gobind Foundation (R){'\n'}Drug Counselling and {'\n'}Rehabilitation Centre</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{width:width*80/100,justifyContent: 'center', backgroundColor:'#FFF2CB',alignItems:'flex-start',flexDirection:'row',marginVertical:15}} >
                            <Image
                                style={{ width: 200, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text>Vardaan life line Foundation{'\n'} Drug Counselling and {'\n'}rehab Center</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{width:width*80/100,justifyContent: 'center', backgroundColor:'#FFF2CB',alignItems:'flex-start',flexDirection:'row',marginVertical:15}} >
                            <Image
                                style={{ width: 200, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text>Rehab Center 4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{width:width*80/100,justifyContent: 'center', backgroundColor:'#FFF2CB',alignItems:'flex-start',flexDirection:'row',marginVertical:15}} >
                            <Image
                                style={{ width: 200, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text>Rehab Center 4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{width:width*80/100,justifyContent: 'center', backgroundColor:'#FFF2CB',alignItems:'flex-start',flexDirection:'row',marginVertical:15}} >
                            <Image
                                style={{ width: 200, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text>Rehab Center 5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress2(108)}

                    >
                        <View style={{width:width*80/100,justifyContent: 'center', backgroundColor:'#FFF2CB',alignItems:'flex-start',flexDirection:'row',marginVertical:15}} >
                            <Image
                                style={{ width: 200, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text>Rehab Center 6</Text>
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
        display:'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor:'#FFF2CB'
    }
})

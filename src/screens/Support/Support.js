import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import TopHeader from '../../components/Header/TopHeader';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class Support extends Component {

    _handleButtonPress = number => {
        Linking.openURL(`tel:${number}`);
    };

    render() {
        return (
            <View style={{  backgroundColor: '#FFF2CB'}}>
                <TopHeader text='Support' />
                <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginVertical: 10, tintColor: '#A77248' }}>

                    <TouchableOpacity
                        onPress={() => this._handleButtonPress(108)}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical:10,alignItems: 'center', width: width * 80 / 100 }}>
                            <Image
                                style={{ width: 150, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text style={{}}>Rehab Center1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress(108)}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center',marginVertical:10, alignItems: 'center', width: width * 80 / 100 }}>
                            <Image
                                style={{ width: 150, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text style={{}}>Rehab Center2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress(108)}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical:10,alignItems: 'center', width: width * 80 / 100 }}>
                            <Image
                                style={{ width: 150, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text style={{}}>Rehab Center3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._handleButtonPress(108)}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical:10,alignItems: 'center', width: width * 80 / 100 }}>
                            <Image
                                style={{ width: 150, height: 48 }}
                                source={require('../../../assets/Call2.png')}
                                resizeMode="contain"
                            />
                            <Text style={{}}>Rehab Center4</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE598'
    }
})

import React, { Component } from 'react';
import {Image, View, Text, Dimensions, TouchableHighlight } from 'react-native';
import CommonBanner from './CommonBanner';
import {styles} from './Banner.style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const images = [
    {
        heading: 'Drugs Take You To Hell\nDisguised as Heaven',
        text:"Don't do drugs because if you drugs you'll go to prison and drugs are more expensive in prison",
        image: require('../../../assets/banner4.png')
    },
    {
        heading: 'Say No To Drugs',
        text:"Always do what you makes happy .Unless it's drugs.Don't do Drugs",
        image: require('../../../assets/banner2.png')
    },
    {
        heading: 'Stand Against Drug Abuse',
        text:"Stand against drugs because they are spoiling the life slowly as time passes.Take a stand against it.Don't do Drugs",
        image: require('../../../assets/banner3.png')
    }
];

class Banner extends Component {
    renderPage(image, text, heading, index) {
        return (
            <View key={index} style={styles.innerContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{heading}</Text>
                    <View style={{ width: width * 80 / 100, marginTop: 10 }}>
                        <Text style={{ textAlign: 'justify', color: '#A77248' }}>{text}</Text>
                    </View>
                </View>
                <Image style={styles.image} source={image} resizeMode='contain' />
                <TouchableHighlight underlayColor='#fff' onPress={() => this.props.navigation.navigate('SignIn')}>
                    <View style={styles.startContainer}>
                        <Text style={styles.startText}>Get Started</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    render() {
        return (
                <CommonBanner images={images} heading='null'/>    
        );
    }
}




export default Banner;

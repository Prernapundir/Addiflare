import React, { Component } from 'react';
import Carousel from 'react-native-banner-carousel';
import {  Image, View, Text, Dimensions, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation'
import {styles} from './CommonBanner.style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



class CommonBanner extends Component {

    renderPage(image, text, heading, index) {
        return (
            <View key={index} style={styles.innerContainer}>
                {this.props.heading && <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{heading}</Text>
                    <View style={{ width: width * 80 / 100, marginTop: 10 }}>
                        <Text style={{ textAlign: 'justify', color: '#A77248' }}>{text}</Text>
                    </View>
                </View>}
                <Image style={this.props.heading ? styles.image : styles.image2} source={image} resizeMode='contain' />
                {this.props.heading && <TouchableHighlight underlayColor='#fff' onPress={() => this.props.navigation.navigate('SignIn')}>
                    <View style={styles.startContainer}>
                        <Text style={styles.startText}>Get Started</Text>
                    </View>
                </TouchableHighlight>}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={width}
                    showsPageIndicator={this.props.heading ? true : false}
                    pageIndicatorStyle={{ height: 10, width: 10, borderRadius: 10, backgroundColor: '#FFE598' }}
                    pageIndicatorOffset={20}
                    activePageIndicatorStyle={{ backgroundColor: '#A77248'}}
                >
                    {this.props.images.map((image, index) => this.renderPage(image.image, image.text, image.heading, index))}
                </Carousel>

            </View>
        );
    }
}





export default withNavigation(CommonBanner);

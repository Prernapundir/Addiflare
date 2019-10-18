import React, { Component } from 'react';
import { View, Text, ScrollView,StyleSheet, Image, Dimensions } from 'react-native';
import TopHeader from '../../components/Header/TopHeader';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class BlogPosts extends Component {


    render() {
        const props = this.props.navigation;
        return (
            <View>
                <TopHeader text={props.getParam('title')} />
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image source={props.getParam('image')} style={styles.image} />
                    </View>
                    <View style={styles.textConatiner}>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <Text>{props.getParam('content')}</Text>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D8DB',
    },
    image: {
        width: width * 95 / 100,
        height: height * 40 / 100,
        borderRadius: 8,
        marginVertical:10
    },
    textConatiner: {
        width: width * 95 / 100,
        height,
        marginVertical: 15
    }

})

import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableHighlight } from 'react-native';
import TopHeader from '../../components/Header/TopHeader';
import { ScrollView } from 'react-native-gesture-handler';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const data = [
    {
        image: require('../../../assets/blog.jpg'),
        title: "Blog1",
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
    },
    {
        image: require('../../../assets/blog.jpg'),
        title: 'Blog2',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
    },
    {
        image: require('../../../assets/blog.jpg'),
        title: 'Blog3',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
    },
    {
        image: require('../../../assets/blog.jpg'),
        title: 'Blog3',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
    },
]

export default class BlogUser extends Component {

    onPressHandler = (title, image, content) => {

        this.props.navigation.navigate('BlogPosts', {
            title,
            image,
            content,
        })

    }

    renderData = () => {
        return data.map((data, i) => {
            return (
                <TouchableHighlight key={i} underlayColor='#D8D8DB' onPress={() => this.onPressHandler(data.title, data.image, data.content)}>
                    <View style={styles.blog}>
                        <ImageBackground source={data.image} style={styles.image}
                            imageStyle={{ borderRadius: 10, }}
                            resizeMode='cover'>
                            <View style={styles.overlay}>
                                <Text style={styles.text}>{data.description}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableHighlight>
            )
        })
    }

    render() {
        return (
            <View>
                <TopHeader text="Blogs" />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.container}>
                        {this.renderData()}
                    </View>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF2CB',
        paddingBottom: 100,
         overlayColor: '#FFF2CB',
    },
    blog: {
        width: width * 95 / 100,
        height: height * 40 / 100,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#0000001A',
        marginVertical: 10
    },
    image: {
        width: width * 95 / 100,
        height: height * 40 / 100,
        justifyContent: 'flex-end',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        textShadowOffset: {
            width: 2,
            height: 6
        },
        width: width * 95 / 100,
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 10,
        borderRadius: 8,
        fontSize: 14,
        fontWeight: '400'
    },
    overlay: {
        width: width * 95 / 100,
        height: height * 40 / 100,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 8,


    }

}) 
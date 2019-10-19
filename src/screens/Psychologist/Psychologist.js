import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import TopHeader from '../../components/Header/TopHeader';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const pyschologist = [
    {
        name: 'Dilip Sharma',
        education: 'MBBS,Md',
        Age: '21 years',
        image: require('../../../assets/user.png'),
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod '
    },
    {
        name: 'Dilip Sharma',
        education: 'MBBS,Md',
        Age: '21 years',
        image: require('../../../assets/user.png')
    },
    {
        name: 'Dilip Sharma',
        education: 'MBBS,Md',
        Age: '21 years',
        image: require('../../../assets/user.png')
    },
    {
        name: 'Dilip Sharma',
        education: 'MBBS,Md',
        Age: '21 years',
        image: require('../../../assets/user.png')
    },
    {
        name: 'Dilip Sharma',
        education: 'MBBS,Md',
        Age: '21 years',
        image: require('../../../assets/user.png')
    },
]
export default class Psychologist extends Component {

    onPressHandler = (name, education, age, image, description) => {
        this.props.navigation.navigate('PsychologistProfile', {
            name,
            education,
            age,
            image,
            description
        })
    }
    renderData = () => {
        return pyschologist.map((list, i) => {
            return (
                <View style={styles.innerContainer} key={i}>
                    <View>
                        <Image source={require('../../../assets/user.png')} style={styles.image} />

                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{list.name}</Text>
                        <Text style={styles.para}>{list.education}</Text>
                        {/* <Text style={styles.para}>{list.Age}</Text>/ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 1 }}>
                            <Image source={require('../../../assets/call.png')} style={styles.call} />
                            <Image source={require('../../../assets/chat.png')} style={styles.call} />
                        </View>
                    </View>
                    <TouchableHighlight underlayColor='#FFF' onPress={() => this.onPressHandler(list.name, list.education, list.Age, list.image, list.description)}>
                        <View style={{ marginHorizontal: 20 }}>
                            <Image source={require('../../../assets/arrow1.png')} style={styles.call} />
                        </View>
                    </TouchableHighlight>
                </View>

            )
        })
    }
    render() {
        return (
            <View style={{ flex: 1, height }}>
                <TopHeader text='Psychologist' />
                <ScrollView>
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
        // paddingBottom:50,
    },
    innerContainer: {
        width: width * 90 / 100,
        height: height * 0.15,
        borderColor: '#0000001A',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    text: {
        color: '#581400',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 2
    },
    para: {
        color: '#581400',
        fontSize: 13,
    },
    textContainer: {
        flexDirection: 'column',
        marginHorizontal: 30
    },
    call: {
        tintColor: '#581400',
        width: 22,
        height: 22
    }

})
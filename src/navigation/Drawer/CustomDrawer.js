import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from 'react-native';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const List = [
    {
        image: require('../../../assets/user.png'),
        name: 'My Profile',
        screen:'CommonFile'
    }, {
        image: require('../../../assets/orders.png'),
        name: 'Blogs',
        screen:'BlogUser'
    },
    {
        image: require('../../../assets/language.png'),
        name: 'Support',
        screen:'Support'
    },
    {
        image: require('../../../assets/refer.png'),
        name: 'Instructions',
        screen:'Instructions'
    },
    {
        image: require('../../../assets/refer.png'),
        name: 'Psychologist',
        screen:'Psychologist'
    }
]

export default class CustomDrawer extends Component {

    state = {
        active: []
    }

    componentDidMount = () => {
        var active = []
        for (let i = 0; i <= List.length; i++) {
            active.push("false")
        }
        this.setState({ active })
    }

     // On click the Drawer List items 

     clickHandler = (index,screen) => {
        var active = this.state.active
        for (let k = 0; k <= List.length; k++) {
            if (active[k] === 'true') {
                active[k] = 'false'
            }
        }
        for (let i = 0; i <= List.length; i++) {
            if (i === index) {
                if (active[i] == 'false') {
                    active[i] = 'true'
                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate(screen)
                } else  {
                    active[i] = 'false'
                }
            }
        }
        this.setState({ active })
     
    }

    renderData = () => {
        return List.map((list, i) => {
            return (
                <TouchableHighlight key={i} onPress={() => this.clickHandler(i,list.screen)} underlayColor='#FFF2CB'>
                    <View style={this.state.active[i] === 'true' ? [styles.innerContainer, styles.activeContainer] : styles.innerContainer}>
                        <Image source={list.image} style={{ width: 20, height: 20 }} resizeMode='contain' />
                        <Text style={this.state.active[i] === 'true' ? [styles.listName, styles.activeListName] : styles.listName}>{list.name}</Text>
                    </View>
                </TouchableHighlight>
            )
        })
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', paddingTop: height * 4 / 100, marginHorizontal: 12 }}>
                        <Image source={require('../../../assets/user.png')} style={{ height: 70, width: 70 }}></Image>
                        <View style={{ flexDirection: 'column', marginHorizontal: 12, justifyContent: 'center' }}>
                            <Text style={styles.header}>Full_Name</Text>
                            <Text style={styles.innerHeader}>8077698988</Text>
                        </View>
                    </View>
                    {this.renderData()}
                </ScrollView>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    innerContainer: {
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: height * 2 / 100,
        paddingLeft: 24,
        alignItems: 'center',
    },
    header: {
        color: '#581400',
        fontSize: 14,
        fontWeight: 'bold'
    },
    innerHeader: {
        fontSize: 12,
        color: '#581400',
        fontWeight: '400'
    },
    listName: {
        marginHorizontal: 14,
        color: '#581400',
        fontSize: 13,
        fontWeight: '400'
    },
    activeListName: {
        fontWeight: 'bold'
    },
    activeContainer: {
        paddingLeft: 14,
        marginLeft: width * 2.8 / 100,
        marginRight: width * 2.8 / 100,
        backgroundColor: '#FFF2CB'
    }
})
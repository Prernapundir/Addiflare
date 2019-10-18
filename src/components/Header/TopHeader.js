import React, { Component } from 'react';
import { View,TouchableHighlight,StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Header } from 'react-native-elements'
import Constants from 'expo-constants'
import { withNavigation } from 'react-navigation';

class TopHeader extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <Header
                    backgroundColor='#fff'
                    barStyle='light-content'
                    placement='center'
                    leftComponent={
                        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} >
                            <View style={{width:50,height:50}}>
                               <Image source={require('../../../assets/notes.png')} style={{ width: 24, height: 24, marginBottom:25 }} resizeMode='contain'></Image>
                            </View>
                        </TouchableOpacity>
                    }
                    // rightComponent={this.props.search && <Image source={require('../../../assets/cart.png')} style={{ width: 75, height: 28, marginBottom: 25 }} resizeMode='contain'></Image>}
                    containerStyle={styles.centerContainerStyle}
                    centerContainerStyle={{ marginBottom: Constants.statusBarHeight }}
                    centerComponent={{ text: this.props.text, style: { color: '#581400', fontWeight: 'bold', fontSize: 18 } }}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({

    statusBar: {
        height: Constants.statusBarHeight
    },
    centerContainerStyle: {
        height: 80 - Constants.statusBarHeight,
        borderBottomWidth:0,
        backgroundColor:'#FFE598'


    }
})

export default withNavigation(TopHeader)
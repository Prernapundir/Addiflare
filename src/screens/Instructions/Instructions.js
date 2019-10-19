
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,
    ScrollView
} from "react-native";



const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import TopHeader from "../../components/Header/TopHeader";

export default class Instruction extends React.Component {
    state = {};

    render() {
        return (

            <View  style={{flex:1,height}} >
                <TopHeader text='Safety Instructions' />
                <ScrollView>
             <View style={styles.container}>
                <View style={{ width: width*0.90, alignItems: 'center', justifyContent: 'center',marginBottom:20 }}>
                    <Image source={require("../../../assets/banner1.jpg")} resizeMode='cover' style={{ marginBottom:20,width: width*0.90,height:height*0.90}}/>
                </View>
                <View style={{ width: width*0.90, alignItems: 'center', justifyContent: 'center',marginBottom:20 }}>
                    <Image source={require("../../../assets/banner5.jpeg")} resizeMode='cover' style={{marginBottom:20, width: width*0.90,height:height*0.90}}/>
                </View>
                <View style={{ width: width*0.90, alignItems: 'center', justifyContent: 'center', marginBottom:20}}>
                    <Image source={require("../../../assets/banner6.jpg")} resizeMode='cover' style={{ marginBottom:20,width: width*0.90,height:height*0.90}}/>
                </View>

             </View>
                </ScrollView>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF2CB',
        marginTop:10,
        opacity:0.9

    }
})

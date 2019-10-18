import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    startContainer: {
        width: width * 80 / 100,
        height: (height * 6) / 100,
        backgroundColor: '#A77248',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: 10
    },
    startText: {
        color: 'white',
        fontWeight: '400'
    },
    image: {
        width: (width * 90) / 100,
        height: (height * 65) / 100
    },
    headerContainer: {
        height: height * 20 / 100,
        paddingTop: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#581400',
        fontSize: 24,
        fontWeight: 'bold',
    }


});

export {styles}

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Banner from '../screens/Banner/Banner';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ConfirmPassword from '../screens/ConfirmPassword/ConfirmPassword';
import SignIn2 from '../screens/SigIn2/SignIn2';

import { createStackNavigator } from 'react-navigation-stack';
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import BlogUser from "../screens/BlogUser/BlogUser";
import BlogPosts from "../screens/BlogUser/BlogPosts";

const RootStack = createStackNavigator({
    Banner: {
        screen: Banner
    },
    SignIn: {
        screen: SignIn
    },
    SignIn2: {
        screen: SignIn2
    },
    SignUp: {
        screen: SignUp
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    ConfirmPassword: {
        screen: ConfirmPassword
    },
    Home: {
        screen: Home
    },
   
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
})



const AppNavigator = createAppContainer(RootStack)

export default AppNavigator;
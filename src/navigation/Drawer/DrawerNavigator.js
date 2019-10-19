import { Dimensions } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import Profile from '../../screens/Profile/Profile';
import BlogUser from '../../screens/BlogUser/BlogUser';
import CustomDrawer from './CustomDrawer';
import Support from '../../screens/Support/Support';
import { createDrawerNavigator } from 'react-navigation-drawer';
import BlogPosts from '../../screens/BlogUser/BlogPosts';
import CommonFile from '../../screens/Profile/CommonFile';
import Instruction from '../../screens/Instructions/Instructions';
import Psychologist from '../../screens/Psychologist/Psychologist';
import PsychologistProfile from '../../screens/Psychologist/PsychologistProfile';

const width = Dimensions.get('window').width;

const DrawerStack = createDrawerNavigator({
    
    // Profile: {
    //     screen: Profile
    // },
    BlogUser: {
        screen: BlogUser
    },
    BlogPosts:{
        screen:BlogPosts
    },
    CommonFile:{
        screen:CommonFile
    },
    Support:{
        screen:Support
    },
    Instructions:{
        screen:Instruction
    },
    Psychologist:{
        screen:Psychologist
    },
    PsychologistProfile:{
        screen:PsychologistProfile
    }

},
    {
        initialRouteName: 'Support',
        drawerWidth: width * 0.7,
        hideStatusBar: true,
        contentComponent: CustomDrawer,
        overlayColor: '#FFF2CB',
        contentOptions: {
            activeTintColor: '#A77248',
            activeBackgroundColor: '#FFF2CB',
        },
    }
);

const DrawerNavigator = createAppContainer(DrawerStack);

export default DrawerNavigator

// Navigation/Navigation.js

import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from '../pages/Login';
import Inscription from '../pages/Inscription';

const navigators = createStackNavigator({
    Login:
    {
        screen: Login,
        navigationOptions:
        {
            title: "Login"
        }
    },
    Register:
    {
        screen: Inscription,
        navigationOptions:
        {
            title:"Inscription"
        }
    }
});


export  default createAppContainer(navigators);

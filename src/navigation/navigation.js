// Navigation/Navigation.js

import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from '../pages/online/Login';
import Inscription from '../pages/online/Inscription';
import  Accueil from '../pages/Accueil';
import MainScreen from '../pages/offline/mainSceen';




const navigators = createStackNavigator({
    Accueil:
    {
        screen: Accueil
    },
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
    },
    OfflineMainScreen:
    {
        screen: MainScreen
    }
});


export  default createAppContainer(navigators);

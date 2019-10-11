import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

import LoginForm from "../components/LoginForm";


export default class Login extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={style.base}>
                
                <Image style={style.ban}  source={require('../../Media/images/ban1.png')} />

                <View style={style.form}>
                    <LoginForm />
                </View>
                
                    
                <View style={style.footer}>
                    <Text>
                        Vous n'avez pas de compte?
                    </Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Register")}}>
                        <Text style={{color: "brown"}}>  Inscrivez vous!</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}


const style = StyleSheet.create(
    {
        base:
        {
            flex: 1,
            alignItems: "center",
            justifyContent : "space-between",
            
        },
        ban:
        {
            flex: 4,
            alignItems: "center",
         
        },
        form:
        {
            flex: 5,    
        }
        ,
        footer:
        {
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            paddingTop: 20,
        }

    }
);
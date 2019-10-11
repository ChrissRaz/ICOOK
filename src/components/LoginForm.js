import React from 'react';
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity
 } from 'react-native';
import { yellow } from 'ansi-colors';



export default class LoginForm extends React.Component {


    
    render() {
        return (

            <View style={style.base}>
                <Text style={style.header}>Connexion</Text>

                <TextInput underlineColorAndroid={"#ffc107"} onSubmitEditing={()=>this.passIn.focus()} returnKeyType="next" returnKeyLabel="suivant" style={style.forms} placeholder="Nom d'utilisateur"/>
                
                <TextInput underlineColorAndroid={"#ffc107"} ref={(input)=>this.passIn = input} returnKeyType="go" returnKeyLabel="connection" secureTextEntry={true} style={style.forms} placeholder="Mot de passe"/>

                <TouchableOpacity style={style.forgotText}>
                    <Text style={style.forgotTextContent}>
                        Mot de passe oublié?
                    </Text>
                </TouchableOpacity>
                <View style={style.connectBtn}>
                    <Button  color="#ffc107" title="Se connecter" onPress={()=>console.log('clicked')}/>
                </View>
            </View>

        );

    }


}


const style = StyleSheet.create(
    {
        base:
        {
            flex:1,
            justifyContent:"space-between"
        },
        header:
        {
            flex:1,
            fontSize: 35
        },
        forms:
        {
            flex:1,
            borderBottomColor: "black"
        },
        forgotText:
        {
            flex:0.5,
            
        },
        forgotTextContent:
        {
            fontSize: 10,
            color: 'grey',
            marginLeft: 75 
        },
        connectBtn:
        {
            flex:1,
            width: 110
        }
        
    }
);

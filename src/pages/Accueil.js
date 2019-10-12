import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { themeColor } from '../shared/vars';
import { checkInternetConnection } from '../shared/funcs';


export default class Accueil extends React.Component {

    _onlineMode()
    {
        if(checkInternetConnection())
        {
            this.props.navigation.navigate("Login");
        }
        else
        {
            console.log("Impossible de se connecter à internet")
        }
        
    }

    _offlineMode()
    {
        this.props.navigation.navigate("OfflineMainScreen");
    }

    render() {


        
        return (
            <KeyboardAvoidingView behavior="padding" style={style.base}>
                
                <Image style={style.ban}  source={require('../../Media/images/ban1.png')} />

                <Text style={style.header}>Mode d'utilisation</Text>

                <View style={style.choice}>
                    <TouchableOpacity style={style.btnChoice} onPress={()=> this._onlineMode()}>
                      
                            <View style={style.btnImage}>
                            
                            </View>
                            <Text style={style.btnText}>
                                Online
                            </Text>
                         
                    </TouchableOpacity>

                    <TouchableOpacity style={style.btnChoice} onPress={()=> this._offlineMode()}>
                        
                            <View style={style.btnImage}>
                            
                            </View>
                            <Text style={style.btnText}>
                                Offline
                            </Text>
                        
                    </TouchableOpacity>
                </View>
                
                    
                <View style={style.footer}>
                    <Text>
                        Panifier votre programme de cuisine avec iCook!!
                    </Text>
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
            alignItems: "center",
            height: 200
         
        },
        header:
        {
            flex:1,
            fontSize: 35,
            fontWeight: "bold"
            
        },
        choice:
        {
            flex: 5,    
            flexDirection:  "row",
            alignItems: "center"
        },

        btnChoice:
        {
            flex: 1,
            alignItems: "center",
        },

        btnImage:
        {
            borderRadius: 55,
            width: 110,
            height: 110,
            backgroundColor: themeColor
            
        }
        ,

        btnText:
        {
            fontSize: 18,
            fontStyle: "italic"
        },
        footer:
        {
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            paddingTop: 20,
        }

    }
);
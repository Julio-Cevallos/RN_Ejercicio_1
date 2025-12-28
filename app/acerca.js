import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Acerda de </Text>
            <Text style={styles.text}> 
                Esta App practica navegacion por Tabs y estructura por pantallas
            </Text>
            <Text style={styles.text}>
                Objetivo: entender cómo se organiza una app React Native
            </Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
    },
    title:{
        fontSize:26,
        marginBottom:12,
    },
    text:{
        fontSize:16,
        marginBottom:8,
        textAlign:'center',
    },
})
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ProfileScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Perfil </Text>
            <Text style={styles.text}> Nombre: Julio </Text>
            <Text style={styles.text}> Rol: Estudiante Politecnico </Text>
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
    },
})
import React from "react";
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const Give = () => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', height: '30%' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.inputview}>
                <TextInput style={styles.txtinput} placeholder="Register Number"></TextInput>
                <TextInput style={styles.txtinput} placeholder="Block"></TextInput>
                <TextInput style={styles.txtinput} placeholder="Room Number"></TextInput>
                <TextInput style={styles.txtinput} placeholder="Number of Clothes"></TextInput>
                <TouchableOpacity style={{ justifyContent:'center',width: '30%', height: '90%', backgroundColor: 'white',borderRadius:10}}>
                    <Text style={{textAlign:"center"}}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#083e5a",
        flex: 1,
        flexDirection: 'column'
    },
    txtinput: {
        backgroundColor: 'white',
        width: '70%',
        height: '100%',
        margin: 10,
        borderRadius: 20,
    },
    inputview: {
        height: '6%',
        width: '100%',
        alignItems: 'center',

    },
})
export default Give;
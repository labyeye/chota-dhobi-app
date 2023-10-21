import React from "react";
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const Take = () => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', height: '30%' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../../assets/logo.png')} />
            </View>
            <View style={{height:'30%'}}></View>
            <View style={styles.inputview}>
                <TouchableOpacity style={{ justifyContent:'center',width: '30%', height: '90%', backgroundColor: 'white',borderRadius:10}}>
                    <Text style={{textAlign:"center"}}>Check Status</Text>
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
export default Take;
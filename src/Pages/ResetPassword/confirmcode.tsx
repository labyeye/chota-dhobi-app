import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const ConfirmCode = ({navigation}) => {
 
    const [code,setcode] = useState('');
    const [pass,setpass] = useState('');
   
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/logo.png")} />
            <Text style={styles.logintxt}>Confirm Code Assistant</Text>
            <View style={styles.inputview}>
                <TextInput style={styles.input} placeholder="Enter Code" value={code} onChangeText={setcode}/>
                <View style={styles.inputGap} />
                <TextInput style={styles.input} placeholder="Enter New Password" value={pass} onChangeText={setpass}/>
                <View style={styles.inputGap} />
            </View>
            <TouchableOpacity style={styles.loginbtn}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    loginbtn: {
        alignItems: "center",
        justifyContent: 'center',
        height: 40,
        borderRadius: 20,
        width: 90,
        backgroundColor: 'white'
    },
    regbtn: {
        marginTop: 20,
    },
    inputview: {
        padding: 20,
    },
    logintxt: {
        color: "white",
        fontSize: 25
    },
    input: {
        backgroundColor: "white",
        width: 250,
        height: 50,
        borderRadius: 10
    },
    inputGap: {
        height: 20, // Adjust the height as per your desired gap size
    },
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#083e5a",
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 200,
        marginTop: -60
    },
});

export default ConfirmCode;

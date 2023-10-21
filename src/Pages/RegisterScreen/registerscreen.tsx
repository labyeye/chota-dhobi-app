import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const RegisterScreem = ({navigation}) => {
    const [name,setname]=useState('');
    const [regno,setregno] = useState('');
    const [phone,setphone] = useState('');
    const [pass,setpass]=useState('');

    const RegisterDone = () =>{
        console.warn("RegisterDone");
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/logo.png")} />
            <Text style={styles.logintxt}>Register Here</Text>
            <View style={styles.inputview}>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setname}/>
                <View style={styles.inputGap} />
                <TextInput style={styles.input} placeholder="Register Number" value={regno} onChangeText={setregno}/>
                <View style={styles.inputGap} />
                <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setphone}/>
                <View style={styles.inputGap} />
                <TextInput style={styles.input} placeholder="Password" value={pass} onChangeText={setpass} secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.loginbtn} onPress={RegisterDone}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.regbtn} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{ color: 'white', }}>Have an account ? Login Here</Text>
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
        fontSize: 40
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

export default RegisterScreem;

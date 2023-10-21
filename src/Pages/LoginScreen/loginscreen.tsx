import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";


const LoginScreen = ({navigation}) => {
  const [user,setuser]=useState('');
  const [pass,setpass]=useState('');
  const SigninPressed = () =>{
    console.warn("Sign In");
  }
  const ForgotPassword = () =>{
    console.warn("ForgotPassword");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <Text style={styles.logintxt}>Login Here</Text>
      <View style={styles.inputview}>
        <TextInput style={styles.input} placeholder="Register Number" value={user} onChangeText={setuser}/>
        <View style={styles.inputGap} /> 
        <TextInput style={styles.input} placeholder="Password" value={pass} onChangeText={setpass} secureTextEntry={true}/>
      </View>
      <TouchableOpacity style={styles.loginbtn} onPress={SigninPressed}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.regbtn} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={{color:'white',}}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.regbtn} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={{color:'white',}}>Don't have an account ? Register Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginbtn:{
    alignItems:"center",
    justifyContent:'center',
    height:40,
    borderRadius:20,
    width:90,
    backgroundColor:'white'
  },
  regbtn:{
    marginTop:20,
  },
  inputview: {
    padding: 20,
  },
  logintxt:{
    color: "white",
    fontSize:40
  },
  input: {
    backgroundColor: "white",
    width: 250,
    height: 50,
    borderRadius:10
  },
  inputGap: {
    height: 20, // Adjust the height as per your desired gap size
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#083e5a",
    justifyContent:'center'
  },
  logo: {
    width: 250,
    height: 200,
    marginTop:-60
  },
});

export default LoginScreen;

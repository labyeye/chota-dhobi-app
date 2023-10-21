import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Dashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.menubar}>
                <Image style={styles.menuimg} source={require('../../../assets/menu.png')} />
                <Image style={styles.menulogo} source={require('../../../assets/logo.png')} />
                <Image style={styles.menuimg} source={require('../../../assets/user.png')} />
            </View>
            <View style={styles.dashboard}>
                <TouchableOpacity style={styles.give} onPress={() => navigation.navigate('Give')}>
                    <Image style={{ width: '50%', height: '50%' }} source={require('../../../assets/laundry.png')} />
                    <Text style={{ color: 'white', fontSize: 20 }}>Give Laundry</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.take} onPress={() => navigation.navigate('Take')}>
                <Image style={{ width: '50%', height: '50%' }} source={require('../../../assets/tshirt.png')}/>
                    <Text style={{ color: 'white', fontSize: 20 }}>Take Laundry</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E5E91",
        alignItems: 'center',
    },
    menubar: {
        flexDirection: 'row',
        height: '7%',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: "#083e5a",
    },
    menuimg: {
        height: '100%', // Set the height to 100% to fill the parent container
        aspectRatio: 1, // Maintain aspect ratio (1:1) for square images
        width: undefined,
        alignSelf: 'center',
        margin: 10
    },
    dashboard: {
        margin:20,
        width: '100%',
        height: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menulogo: {
        height: '80%', // Set the height to 100% to fill the parent container
        aspectRatio: 3, // Maintain aspect ratio (1:1) for square images
        width: undefined,
        alignSelf: 'center',
        margin: 10
    },
    give: {
        width: '40%',
        height: '40%',
        alignItems: 'center',
        backgroundColor: '#1B88CE',
        borderRadius: 30,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    take: {
        width: '40%',
        height: '40%',
        alignItems: 'center',
        backgroundColor: '#1B88CE',
        borderRadius: 30,
        justifyContent: 'center',
    }
})

export default Dashboard;
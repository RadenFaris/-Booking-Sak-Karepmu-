import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Header, Notif } from '../../assets'

const Notifications = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={Header} style={styles.header}></ImageBackground>
            <Image source={Notif} style={styles.notif}/>
            <View style={styles.teksnotifkosong}>
            <Text style={styles.teksnotifkosong1}>No Notifications Yet</Text>
            <Text style={styles.teksnotifkosong2}>All notifications we send will appear here, so you can view them easily anytime</Text>
            </View>
        </View>
    )
}

export default Notifications

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor: 'white'
    },
    header:{
        width: windowWidth,
        height: windowHeight*0.108
    },
    notif:{
        marginTop: 40,
        width: windowWidth,
        height: 300,
        resizeMode: 'contain'
    },
    teksnotifkosong:{
        marginTop:-50,
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    teksnotifkosong1:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    teksnotifkosong2:{
        fontSize: 14,
        textAlign: 'center'
    }
})

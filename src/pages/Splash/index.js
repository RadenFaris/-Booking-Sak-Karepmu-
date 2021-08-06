import React , {useEffect} from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SplashBackground, logo } from '../../assets'

const Splash = ( {navigation} ) => {
    useEffect(() => {setTimeout(()=>{navigation.replace('MainApp');}, 3000)}, [navigation]);
    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
            <Image source={logo} style={styles.logo}/>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    logo : {
        width : 244,
        height : 370
    }
})

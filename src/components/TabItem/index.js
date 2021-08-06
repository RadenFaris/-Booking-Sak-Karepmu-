import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Activity, Activityaktif, Bell, Bellaktif, Home, Homeaktif, Profile, Profileaktif, Search, Searchaktif,  } from '../../assets'
import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () =>{
        if(label === "Home") return isFocused ? <Homeaktif/> : <Home />

        if(label === "Activity") return isFocused ? <Activityaktif/> : <Activity />

        if(label === "Search") return isFocused ? <Searchaktif style={styles.search}/> : <Search style={styles.search}/>

        if(label === "Notification") return isFocused ? <Bellaktif/> : <Bell />

        if(label === "Profile") return isFocused ? <Profileaktif/> : <Profile />

        return <Home />
    }
    return (
            <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.container}>
                <Icon />
                <Text style={styles.text(isFocused)}>
                {label}
                </Text>
            </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    search:{
        marginTop: -35
    },
    text:(isFocused) => ({
        fontSize: 11,
        color: isFocused ?  WARNA_UTAMA : WARNA_DISABLE,
        marginTop: 5
    })
})

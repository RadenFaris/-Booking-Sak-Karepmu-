import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Fotoprofil, Header, Indikator, Pay, StarRank, Bank, BTC, ArrowInfo, Help, Setting } from '../../assets'

const Profile = () => {
    return (
        <View style={styles.page}>
            <ScrollView>
            <ImageBackground source={Header} style={styles.header}></ImageBackground>
            <View style={styles.konten1}>
                <Image source={Fotoprofil}/>
                <View style={styles.tekskonten1}>
                    <Text style={styles.teks1konten1}>Raden Faris </Text>
                    <Text style={styles.teks2konten1}> Logged In with Google </Text>
                    <Text style={styles.teks3konten1}> View My Profile </Text>
                </View>
            </View>

            <Text style={styles.rank}>Rank</Text>
            <View style={styles.konten2}>
                <Image source={StarRank} />
                <View style={styles.tekskonten2}>
                    <Text style={styles.teks1konten2}>Elite 1</Text>
                    <Image source={Indikator}/>
                    <Text style={styles.teks2konten2}>XP: 250/1000</Text>
                </View>
            </View>

            <Text style={styles.paymentOptions}>Payment Options</Text>
            <View style={styles.konten3}>
                <View style={styles.menupayment}>
                    <Pay style={styles.iconmenupayment}/>
                    <Text style={styles.judulmenupayment}>BSK Pay</Text>
                    <ArrowInfo style={styles.arrowmenupayment1}/>
                    <View style={styles.garis}></View>
                </View>
                <View style={styles.garis}></View>
                <View style={styles.menupayment}>
                    <Bank style={styles.iconmenupayment}/>
                    <Text style={styles.judulmenupayment}>Bank</Text>
                    <ArrowInfo style={styles.arrowmenupayment2}/>
                    
                </View>
                <View style={styles.garis}></View>
                <View style={styles.menupayment}>
                    <BTC style={styles.iconmenupayment}/>
                    <Text style={styles.judulmenupayment}>Bitcoin</Text>
                    <ArrowInfo style={styles.arrowmenupayment3}/> 
                </View>
            </View>

            <Text style={styles.memberFeatures}>Member Features</Text>
            <View style={styles.konten4}>
                <View style={styles.menumember}>
                    <Help style={styles.iconmenumember}/>
                    <Text style={styles.judulmenumember}>Settings</Text>
                    <ArrowInfo style={styles.arrowmenumember1}/>
                </View>
                <View style={styles.garis}></View>
                <View style={styles.menumember}>
                    <Setting style={styles.iconmenumember}/>
                    <Text style={styles.judulmenumember}>Help Center</Text>
                    <ArrowInfo style={styles.arrowmenumember2}/>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Profile

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
    konten1:{
        borderColor: '#AE5EFF',
        borderWidth: 3,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        borderRadius: 20
    },
    tekskonten1:{
        position: 'absolute',
        marginTop: 15,
        marginLeft: 110
    },
    teks1konten1:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    teks2konten1:{
        fontSize: 14,
        marginLeft: -2,
        marginTop: 5
    },
    teks3konten1:{
        fontSize: 14,
        color: '#AE5EFF',
        marginLeft: -2,
        marginTop: 5,
        fontWeight: 'bold'
    },
    konten2:{
        borderColor: '#AE5EFF',
        borderWidth: 3,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 40,
        paddingLeft: 15,
        borderRadius: 20
    },
    rank:{
        fontSize: 14,
        marginLeft: 25,
        marginTop: 20,
        fontWeight: 'bold'
    },
    tekskonten2:{
        position: 'absolute',
        marginTop: 20,
        marginLeft: 85,
        alignItems: 'center'
    },
    konten3:{
        borderColor: '#AE5EFF',
        borderWidth: 3,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 20
    },
    paymentOptions:{
        fontSize: 14,
        marginLeft: 25,
        marginTop: 20,
        fontWeight: 'bold'
    },
    menupayment:{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems:'center'
    },
    judulmenupayment:{
        paddingLeft: 20
    },
    arrowmenupayment1:{
        marginLeft: 210
    },
    arrowmenupayment2: {
        marginLeft: 232
    },
    arrowmenupayment3:{
        marginLeft: 220
    },
    garis:{
        backgroundColor: '#AE5EFF',
        height: 3,
        marginLeft: -15,
        marginBottom: 10 
    },
    memberFeatures:{
        fontSize: 14,
        marginLeft: 25,
        marginTop: 20,
        fontWeight: 'bold'
    },
    konten4:{
        borderColor: '#AE5EFF',
        borderWidth: 3,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 20,
        marginBottom: 50
    },
    menumember:{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems:'center'
    },
    judulmenumember:{
        paddingLeft: 20
    },
    arrowmenumember1: {
        marginLeft: 213
    },
    arrowmenumember2:{
        marginLeft: 192
    },
})

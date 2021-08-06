import React , {useState} from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Sport, Cafe, Hotel, Transportation, Music, Warnet, Cinema, Wedding, Fishing, Farming, Karaoke, More, Arrow, LapanganBadminton, SportHalamanGambarDoang} from '../../assets'

const Home = () => {

    const [deskrip, setDeskrip] = useState('test')

    return (
        <View style={styles.page}>
            <ScrollView>
            <ImageBackground source={Header} style={styles.header}></ImageBackground>

            {{
                test: 
                <View>
                    <View style={styles.menu}>
                        <View style={styles.menubaris1}>
                            <TouchableOpacity onPress={()=>setDeskrip('gambaraktif')}>
                                <View style={styles.menusport}>
                                <Sport/>
                                <Text style={styles.judulmenu}>Sport</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <View style={styles.menucafe}>
                            <Cafe/>
                            <Text style={styles.judulmenu}>Cafe</Text>
                            </View>

                            <View style={styles.menutransportation}>
                            <Transportation/>
                            <Text style={styles.judulmenu}>Transportation</Text>
                            </View>
                        
                            <View style={styles.menuhotel}>
                            <Hotel/>
                            <Text style={styles.judulmenu}>Hotel</Text>
                            </View>
                        </View>
                        <View style={styles.menubaris2}>

                            <View style={styles.menumusic}>
                            <Music/>
                            <Text style={styles.judulmenu}>Music</Text>
                            </View>
                            
                            <View style={styles.menuwarnet}>
                            <Warnet/>
                            <Text style={styles.judulmenu}>Warnet</Text>
                            </View>
                            
                            <View style={styles.menucinema}>
                            <Cinema/>
                            <Text style={styles.judulmenu}>Cinema</Text>
                            </View>

                            <View style={styles.menuwedding}>
                            <Wedding/>
                            <Text style={styles.judulmenu}>Wedding</Text>
                            </View>

                        </View>
                        <View style={styles.menubaris3}>

                            <View style={styles.menufishing}>
                            <Fishing/>
                            <Text style={styles.judulmenu}>Fishing</Text>    
                            </View>
                            
                            <View style={styles.menufarming}>
                            <Farming/>
                            <Text style={styles.judulmenu}>Farming</Text>
                            </View>
                            
                            <View style={styles.menukaraoke}>
                            <Karaoke/>
                            <Text style={styles.judulmenu}>Karaoke</Text>
                            </View>
                            
                            <View style={styles.menumore}>
                            <More/>
                            <Text style={styles.judulmenu}>More</Text>
                            </View>
                            
                        </View>
                    </View>

                    <View style={styles.pembatas}></View>

                    <View>
                        <View style={styles.rekomendasi}>
                            <Text style={styles.teksrekomendasi}>Rekomendasi</Text>
                        </View>
                        
                        <View style={styles.kontenrekomendasi}>
                    
                        <Image source={LapanganBadminton}/>
                            <View style={styles.judulkontenrekomendasi}>
                                <Text style={styles.teksjudulkontenrekomendasi1}>Lapangan Badminton Outdoor</Text>
                                <Text style={styles.teksjudulkontenrekomendasi2}>Jl. Merpati Putih, Kota Samping, ...</Text>
                                <Arrow style={styles.menuteksjudulkontenrekomendasi}/>
                            </View>
                            
                        </View>
                        <View style={styles.kontenrekomendasi}>
                    
                        <Image source={LapanganBadminton} style={styles.gambar}/>
                            <View style={styles.judulkontenrekomendasi}>
                                <Text style={styles.teksjudulkontenrekomendasi1}>Lapangan Badminton Outdoor</Text>
                                <Text style={styles.teksjudulkontenrekomendasi2}>Jl. Merpati Putih, Kota Samping, ...</Text>
                                <Arrow style={styles.menuteksjudulkontenrekomendasi}/>
                            </View>
                            
                        </View>
                        <View style={styles.kontenrekomendasi}>
                    
                        <Image source={LapanganBadminton} style={styles.gambar}/>
                            <View style={styles.judulkontenrekomendasi}>
                                <Text style={styles.teksjudulkontenrekomendasi1}>Lapangan Badminton Outdoor</Text>
                                <Text style={styles.teksjudulkontenrekomendasi2}>Jl. Merpati Putih, Kota Samping, ...</Text>
                                <Arrow style={styles.menuteksjudulkontenrekomendasi}/>
                            </View>
                            
                        </View>
                    </View>
                </View>,

                gambaraktif: 
                    <View>
                        <Image source={SportHalamanGambarDoang} style={styles.gambarSport}/>
                    </View>
            }[deskrip]}

            
            
            </ScrollView>
        </View>
    )
}

export default Home

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
    menu:{
        padding: 10
    },
    menubaris1:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80
    },
    menubaris2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80
    },
    menubaris3:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80
    },
    menusport:{
        alignItems: 'center',
        width: 75
    },
    menutransportation:{
        alignItems: 'center',
        width: 75
    },
    menucafe:{
        alignItems: 'center',
        width: 75
    },
    menuhotel:{
        alignItems: 'center',
        width: 75
    },
    menumusic:{
        alignItems: 'center',
        width: 75
    },
    menuwarnet:{
        alignItems: 'center',
        width: 75
    },
    menucinema:{
        alignItems: 'center',
        width: 75
    },
    menuwedding:{
        alignItems: 'center',
        width: 75
    },
    menufishing:{
        alignItems: 'center',
        width: 75
    },
    menufarming:{
        alignItems: 'center',
        width: 75
    },
    menukaraoke:{
        alignItems: 'center',
        width: 75
    },
    menumore:{
        alignItems: 'center',
        width: 75
    },
    judulmenu:{
        fontSize: 11
    },
    pembatas:{
        height: 15,
        backgroundColor: '#AE5EFF',
        opacity: 0.5
    },
    rekomendasi:{
        paddingTop: 15,
        paddingLeft: 15
    },
    teksrekomendasi:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    },
    kontenrekomendasi:{
        backgroundColor: '#AE5EFF',
        height: 145,
        marginBottom: 30,
        marginLeft: 15,
        width: 320,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    judulkontenrekomendasi:{
        backgroundColor: '#rgba(174, 94, 255, 0.87)',
        height: 80,
        width: 320,
        marginTop: 65,
        paddingTop: 5,
        paddingLeft: 10,
        position: 'absolute'
    },
    teksjudulkontenrekomendasi1:{
        color: 'white',
        fontSize: 14

    },
    teksjudulkontenrekomendasi2:{
        color:'white',
        fontSize: 12
    },
    menuteksjudulkontenrekomendasi:{
        marginLeft: 285,
        marginTop: 15
    },
    gambarSport:{
        marginTop: 20
    }
})

import React from 'react'
import { useState } from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Filter, Header,Arrow, LapanganBadminton, TesGambar } from '../../assets'

const Search = () => {
    const [info, setInfo] = useState('test')
    return (
        <View style={styles.page}>
            <ScrollView>
            <ImageBackground source={Header} style={styles.header}></ImageBackground>
            {{
                test: 
                <View>
                    <View style={styles.searchBar}>
                        <TextInput style={styles.inputsearch} placeholder='Search...'/>
                        <Filter style={styles.iconfilter}/>
                    </View>

                    <View>
                        <View style={styles.rekomendasi}>
                            <Text style={styles.teksrekomendasi}>Nearby You</Text>
                        </View>
                        
                        <TouchableOpacity onPress={()=>setInfo('nyalaBro')}>

                            <View style={styles.kontenrekomendasi}>

                            <Image source={LapanganBadminton}/>
                                <View style={styles.judulkontenrekomendasi}>
                                    <Text style={styles.teksjudulkontenrekomendasi1}>Lapangan Badminton Outdoor</Text>
                                    <Text style={styles.teksjudulkontenrekomendasi2}>Jl. Merpati Putih, Kota Samping, ...</Text>
                                    <Arrow style={styles.menuteksjudulkontenrekomendasi}/>
                                </View>
                                
                            </View>
                        </TouchableOpacity>
                        
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
                nyalaBro: 
                <View>
                    <Image source={TesGambar} style={styles.TesGambarDoangIniCuy}/>
                </View>
            }[info]}

            
            </ScrollView>
        </View>
    )
}

export default Search

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
    searchBar:{
        borderColor: '#AE5EFF',
        borderWidth: 3,
        marginLeft: 30,
        marginRight: 30,
        height: 90,
        borderTopWidth: 0,
        flexDirection: 'row',
        padding: 10
    },
    inputsearch: {
        borderColor: '#AE5EFF',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 60,
        marginTop: 20,
        padding: 0,
        paddingLeft: 10,
        width: 275,
        height: 35,
        marginBottom: 10
    },
    iconfilter: {
        marginLeft: -50,
        marginTop: 23,
    },
    rekomendasi:{
        paddingTop: 15,
        paddingLeft: 15
    },
    teksrekomendasi:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 30
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
    TesGambarDoangIniCuy:{
        marginTop: 20,
        marginBottom: 50
    }
})

import React, {useState} from 'react'
import { Button, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Correct, Header, LapanganMini } from '../../assets'

const Activity = () => {

    const [data, setData] = useState('booking')

    return (
        <View style={styles.page}>
            <ScrollView>
                <ImageBackground source={Header} style={styles.header}></ImageBackground>
                <View style={styles.menuactivity}>
                    <View style={[(data=='booking')?styles.booking2:styles.booking1]}>
                        <TouchableOpacity onPress={()=>setData('booking')}>
                            <Text style={[(data=='booking')?styles.judulmenu1:styles.judulmenu2]}>Booking</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[(data=='onprogress')?styles.onProgress2:styles.onProgress1]}>
                        <TouchableOpacity onPress={()=>setData('onprogress')}>
                            <Text style={[(data=='onprogress')?styles.judulmenu1:styles.judulmenu2]}>On Progress</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[(data=='finished')?styles.finished2:styles.finished1]} >
                        <TouchableOpacity onPress={()=>setData('finished')}>
                            <Text style={[(data=='finished')?styles.judulmenu1:styles.judulmenu2]}>Finished</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {{
                    booking: 
                    <View>
                        <View>
                            <Text style={styles.tekswaiting}>Waiting for Payment</Text>
                            <View style={styles.kontenwaiting}>
                                <Text style={styles.judulkonten}>Lapangan Badminton Outdoor</Text>
                                <Text style={styles.deskripsikonten}>Jl. Merpati Putih, Kota Samping, ...</Text>
                                <Image source={LapanganMini} style={styles.ilustrasi}/>
                                <View style={styles.deskripsi}>
                                    <Text style={styles.teksdeskripsi}>Date            : Thursday, 23/7/2025 (09:00 - 12:00)</Text>
                                    <Text style={styles.teksdeskripsi}>Time           : 3 hours</Text>
                                    <Text style={styles.teksdeskripsi}>Price           : Rp. 30.000,00/hours</Text>
                                    <Text style={styles.teksdeskripsi}>Total Price : Rp. 60.000,00</Text>
                                </View>
                                <View style={styles.buttonmenu}>
                                    <View style={styles.waktu}>
                                        <Text style={styles.tekswaktu}>29:59</Text>
                                    </View>
                                    <View style={styles.pay}>
                                        <Text style={styles.tekspay}>Pay</Text>
                                    </View>
                                    <View style={styles.cancel}>
                                        <Text style={styles.tekscancel}>Cancel</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.teksbooked}>Booked</Text>
                            <View style={styles.kontenbooked}>
                            <Text style={styles.judulkonten}>Lapangan Badminton Outdoor</Text>
                                <Text style={styles.deskripsikonten}>Jl. Merpati Putih, Kota Samping, ...</Text>
                                <Image source={LapanganMini} style={styles.ilustrasi}/>
                                <View style={styles.deskripsi}>
                                    <Text style={styles.teksdeskripsi}>Date            : Thursday, 23/7/2025 (09:00 - 12:00)</Text>
                                    <Text style={styles.teksdeskripsi}>Time           : 3 hours</Text>
                                    <Text style={styles.teksdeskripsi}>Price           : Rp. 30.000,00/hours</Text>
                                    <Text style={styles.teksdeskripsi}>Total Price : Rp. 60.000,00</Text>
                                </View>
                                <View style={styles.statusbooked}>
                                    <Text style={styles.teksstatusbooked}>Booked</Text>
                                    <Correct style={styles.correct}/>
                                </View>
                            </View>
                        </View>
                    </View>,
                    onprogress: 
                    <View>
                        <View>
                            <Text style={styles.teksbooked}>Time Remaining</Text>
                            <View style={styles.kontenbooked}>
                            <Text style={styles.judulkonten}>Lapangan Badminton Outdoor</Text>
                                <Text style={styles.deskripsikonten}>Jl. Merpati Putih, Kota Samping, ...</Text>
                                <Image source={LapanganMini} style={styles.ilustrasi}/>
                                <View style={styles.deskripsi}>
                                    <Text style={styles.teksdeskripsi}>Date            : Thursday, 23/7/2025 (09:00 - 12:00)</Text>
                                    <Text style={styles.teksdeskripsi}>Time           : 3 hours</Text>
                                    <Text style={styles.teksdeskripsi}>Price           : Rp. 30.000,00/hours</Text>
                                    <Text style={styles.teksdeskripsi}>Total Price : Rp. 60.000,00</Text>
                                </View>
                                <View style={styles.statuswaktu}>
                                    <Text style={styles.teksstatuswaktu}>2:37:45</Text>
                                </View>
                            </View>
                        </View>
                    </View>,
                    finished: 
                    <View>
                        <View>
                            <Text style={styles.teksbooked}>Booking History</Text>
                            <View style={styles.kontenbooked}>
                            <Text style={styles.judulkonten}>Lapangan Badminton Outdoor</Text>
                                <Text style={styles.deskripsikonten}>Jl. Merpati Putih, Kota Samping, ...</Text>
                                <Image source={LapanganMini} style={styles.ilustrasi}/>
                                <View style={styles.deskripsi}>
                                    <Text style={styles.teksdeskripsi}>Date            : Thursday, 23/7/2025 (09:00 - 12:00)</Text>
                                    <Text style={styles.teksdeskripsi}>Time           : 3 hours</Text>
                                    <Text style={styles.teksdeskripsi}>Price           : Rp. 30.000,00/hours</Text>
                                    <Text style={styles.teksdeskripsi}>Total Price : Rp. 60.000,00</Text>
                                </View>
                            </View>
                        </View>
                    </View>,
                }[data]}

            </ScrollView>           
        </View>
    )
}



export default Activity

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
    menuactivity:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'space-between',
        marginLeft: 50,
        marginRight: 50,
        borderColor: '#AE5EFF',
        borderWidth: 3,
        borderRadius: 15,
        backgroundColor: '#AE5EFF'
    },
    booking1:{
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: 'center',
        width: 100
    },
    booking2:{
        backgroundColor: '#AE5EFF',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: 'center',
        width: 100
    },
    onProgress1:{
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        width: 100
    },
    onProgress2:{
        backgroundColor: '#AE5EFF',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        width: 100
    },
    finished1:{
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        alignItems: 'center',
        width: 100
    },
    finished2:{
        backgroundColor: '#AE5EFF',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        alignItems: 'center',
        width: 100
    },
    judulmenu1:{
        fontWeight: 'bold',
        color:'white'
    },
    judulmenu2:{
        fontWeight: 'bold',
        color:'black'
    },
    tekswaiting:{
        marginTop: 30,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    kontenwaiting:{
        marginTop: 15,
        borderColor: '#AE5FEF',
        borderWidth: 3,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderRadius: 15
    },
    deskripsi:{
        marginLeft: 70,
        marginTop: -60
    },
    teksdeskripsi:{
        fontSize: 12
    },
    ilustrasi:{
        marginTop: 20
    },
    buttonmenu:{
        height: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    waktu:{
        backgroundColor: '#D3CB00',
        width: 125,
        height: 30,
        alignItems: 'center'
    },
    tekswaktu:{
        alignItems: 'center',
        paddingTop: 5,
        color: 'white'
    },
    pay:{
        backgroundColor: '#AE5FEF',
        width: 100,
        height: 30,
        alignItems: 'center'
    },
    tekspay:{
        alignItems: 'center',
        paddingTop: 5,
        color: 'white'
    },
    tekscancel:{
        alignItems: 'center',
        paddingTop: 5,
        color: 'white'
    },
    cancel:{
        backgroundColor: '#D06666',
        width: 75,
        height: 30,
        alignItems: 'center'
    },
    judulkonten:{
        fontWeight:'bold',
        fontSize: 14
    },
    deskripsikonten:{
        fontSize:12
    },
    teksbooked:{
        marginTop: 30,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    kontenbooked:{
        marginTop: 15,
        borderColor: '#AE5FEF',
        borderWidth: 3,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderRadius: 15,
        marginBottom: 50
    },
    statusbooked:{
        backgroundColor: 'green',
        flexDirection: 'row',
        padding : 5,
        paddingLeft: 15,
        alignItems: 'center',
        width : 105,
        marginTop: 20
    },
    teksstatusbooked:{
        color: 'white',
        alignItems: 'center'
    },
    correct:{
        marginLeft: 10
    },
    statuswaktu:{
        backgroundColor: '#AE5FEF',
        flexDirection: 'row',
        padding : 5,
        alignItems: 'center',
        width : 105,
        marginTop: 20,
        justifyContent: 'center'
    },
    teksstatuswaktu:{
        color: 'white',
        alignItems: 'center',
        fontWeight: 'bold'
    },
})

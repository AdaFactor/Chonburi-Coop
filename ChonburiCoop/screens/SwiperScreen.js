import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native'

import Swiper from 'react-native-swiper'

export default class SwiperScreen extends Component {
  render(){
    return (
      <Swiper 
        style={styles.wrapper} 
        autoplay={true}
        dotColor='#999'
        activeDotColor='#fff'
      >
        <View style={styles.welcome}>
            <ImageBackground source={require('../static/images/welcome.png')} style={styles.welcomeImage}>

                <Text style={{color: '#fff', fontSize: 20}}>สหกรณ์ออมทรัพย์ครูชลบุรี จำกัด</Text>
            </ImageBackground>                                        
        </View>
        <View style={styles.slide1}>
            <ImageBackground source={require('../static/images/sweper-home.png')} style={styles.welcomeImage}>
                <Text style={{color: '#fff', fontSize: 16}}>สหกรณ์ออมทรัพย์ครูชลบุรี จำกัด</Text>
                <Text style={{color: '#fff', fontSize: 16}}>เป็นสถาบันการเงินที่ได้มาตรฐาน จัดสวัสดิการทั่วถึง</Text>
                <Text style={{color: '#fff', fontSize: 16}}>สมาชิกพึงพอใจ ให้บริการด้วยเทคโนโลยี </Text>       
                <Text style={{color: '#fff', fontSize: 16}}>เป็นศักดิ์ศรีของครูชล</Text>         
            </ImageBackground>
        </View>
        <View style={styles.slide2}>
            <ImageBackground source={require('../static/images/swiper-home-3.png')} style={styles.welcomeImage}>
                <Text style={{color: '#fff', fontSize: 16}}>55/99 หมู่ที่ 3</Text>
                <Text style={{color: '#fff', fontSize: 16}}>ถนนสุขุมวิท ตำบลเสม็ด อำเภอเมือง</Text>
                <Text style={{color: '#fff', fontSize: 16}}>จังหวัดชลบุรี 20000</Text>       
            </ImageBackground>                                                   
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        height: '45%',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    welcome: {
        backgroundColor: '#00b3b3', 
        alignItems: 'center',
    },
    welcomeImage: {
        width: '100%',
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

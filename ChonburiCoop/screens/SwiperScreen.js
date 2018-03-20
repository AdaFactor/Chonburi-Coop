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
            <Text>สำนักงาน 038 111 092 - 6</Text>                                       
        </View>
        <View style={styles.slide2}>
            <Text>จำนวนสมาชิก 11502 คน</Text>
            <Text>สมาชิกสามัญ 11054 คน</Text>                                       
            <Text>สมาชิกสมทบ 448 คน</Text>                                                   
        </View>
      </Swiper>
    );
  }
}
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
            <ImageBackground source={{uri:'http://www.chtsc.com/images/2560/10-1022.jpg'}} style={styles.welcomeImage}>
            </ImageBackground>
        </View>
        <View style={styles.slide1}>
            <ImageBackground source={{uri:'http://www.chtsc.com/images/2561/chang_61.jpg'}} style={styles.welcomeImage}>
            </ImageBackground>
        </View>
        <View style={styles.slide2}>
            <ImageBackground source={{uri:'http://www.chtsc.com/images/2561/present/18-04-2018.jpg'}} style={styles.welcomeImage}>
            </ImageBackground>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        height: '30%',
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

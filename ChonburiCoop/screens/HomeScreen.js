import React, { Component } from 'react'
import { 
    Platform,
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    Keyboard,
    AsyncStorage,
    BackHandler,
} from 'react-native'

import { DrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation'
import { Header, Icon } from 'react-native-elements'
import { LinearGradient } from 'expo'

import SwiperScreen from './SwiperScreen'
import styles from '../static/css/home-style'
import Association from './Association'
import Bill from './Bill'
import Calculator from './Calculator'
import chargedList from './chargedList'
import Debt from './Debt'
import Dividend from './Dividend'
import Guarantee from './Guarantee'
import Profile from './Profile'
import Saving from './Saving'
import LoginScreen from './LoginScreen'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            memberName: '',
            myKey: null
        }
    }

    componentDidMount() {
        BackHandler.removeEventListener('hardwareBackPress', () => {
            return false
        })
    }

    render() {
        let userId = this.props.navigation.state.params.id_user
        let name = this.props.navigation.state.params.memberName
        return(
            <View style={styles.contrainer}>
                <Header
                    leftComponent={
                        <Icon 
                            name='email' 
                            onPress={() => {this.props.navigation.navigate('NewsScreen', { id_user: userId })}}
                            color='#fff'
                        />
                    }
                    centerComponent={{ text: 'หน้าหลัก', style: { color: '#fff', fontSize: 16 } }}
                    rightComponent={
                        <Icon 
                            name='exit-to-app'
                            onPress={
                                () => {
                                    this.props.navigation.navigate('LoginScreen')
                                }
                            }
                            color='#fff'
                        />
                    }
                    backgroundColor='#248f24'
                />
                <SwiperScreen />
                <View style={{justifyContent: 'center', height:'60%', backgroundColor:'#fff'}}>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity style={[styles.menuBtn, {backgroundColor:'#e6ffff'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('Profile', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/member.png')} />
                                <Text style={{color: '#006666'}}>สมาชิก</Text>                        
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={[styles.menuBtn, {backgroundColor: '#ffffe6'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('Association', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/associations.png')} />
                                <Text style={{color: '#b3b300'}}>สมาคม</Text>                        
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={[styles.menuBtn, {backgroundColor: '#F4C3C3'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('Debt', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/debts.png')} />
                                <Text style={{color: '#D00000'}}>หนี้สิน</Text>                        
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity 
                                style={[styles.menuBtn, {backgroundColor: '#e6e6ff'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('Bill', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/bill.png')} />
                                <Text style={{color: '#000066'}}>ใบเสร็จ</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={[styles.menuBtn, {backgroundColor:'#e6f9ff'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('Saving', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/money.png')} />   
                                <Text style={{color: '#0099cc'}}>เงินฝาก</Text>                        
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={[styles.menuBtn, {backgroundColor:'#f9f2ec'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('Guarantee', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/guarantee.png')} />
                                <Text style={{color: '#996633'}}>ค้ำประกัน</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity 
                                style={[styles.menuBtn, {backgroundColor:'#fff0e6'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('Dividend', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/receive.png')} />
                                <Text style={{color: '#ff6600'}}>ปันผล</Text>                        
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={[styles.menuBtn, {backgroundColor: '#ffe6f9'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('Calculator', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/calculator.png')} />
                                <Text style={{color: '#cc0099'}}>คำนวณเงินกู้</Text>                        
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={[styles.menuBtn, {backgroundColor: '#e6ffe6'}]}
                                onPress={
                                    () => { 
                                        this.props.navigation.navigate('chargedList', { id_user: userId })
                                    }
                                }
                            >
                                <Image source={require('../static/images/todolist.png')} />
                                <Text style={{color: '#003300'}}>เรียกเก็บ</Text>                        
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
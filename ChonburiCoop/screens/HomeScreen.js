import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    ImageBackground 
} from 'react-native'

import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import { Header, Icon } from 'react-native-elements'

import styles from '../static/css/home-style'
import Bill from './Bill'
import Profile from './Profile'
import Association from './Association'
import Debt from './Debt';

class HomeScreen extends React.Component {
    render() {
        return(
            <View style={styles.contrainer}>
                <Header
                    leftComponent={
                        <Icon 
                        name='menu' 
                        onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
                        color='#fff'
                        />
                    }
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'email', color: '#fff' }}
                    statusBarProps={{ translucent: true }}
                    backgroundColor='#33cc33'
                />
                <View style={styles.welcome}>
                    <ImageBackground source={require('../static/images/welcome.png')} style={styles.welcomeImage}>
                        <Text style={{color: '#fff', fontSize: 20}}>สหกรณ์ออมทรัพย์ครูชลบุรี จำกัด</Text>
                    </ImageBackground>                                        
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', height: '45%', backgroundColor: '#ffffff'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <TouchableOpacity 
                            style={styles.bill}
                            onPress={
                                () => { 
                                  this.props.navigation.navigate('Bill')
                                }
                            }
                        >
                            <Image source={require('../static/images/bill.png')} />
                            <Text style={{color: '#000066'}}>ใบเสร็จ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.money}
                            onPress={
                                () => { 
                                this.props.navigation.navigate('Saving')
                                }
                            }
                        >
                            <Image source={require('../static/images/money.png')} />
                            <Text style={{color: '#0099cc'}}>เงินฝาก</Text>                        
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.guarantee}
                            onPress={
                                () => { 
                                this.props.navigation.navigate('Guarantee')
                                }
                            }
                        >
                            <Image source={require('../static/images/guarantee.png')} />                                
                            <Text style={{color: '#996633'}}>ค้ำประกัน</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.receive}
                            onPress={
                                () => { 
                                this.props.navigation.navigate('Dividend')
                                }
                            }
                        >
                            <Image source={require('../static/images/receive.png')} />                    
                            <Text style={{color: '#ff6600'}}>ปันผล</Text>                        
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.calculator}
                            onPress={
                                () => { 
                                this.props.navigation.navigate('Calculator')
                                }
                            }
                        >
                            <Image source={require('../static/images/calculator.png')} />                    
                            <Text style={{color: '#cc0099'}}>คำนวณเงินกู้</Text>                        
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.todolist}
                            onPress={
                                () => { 
                                this.props.navigation.navigate('chargedList')
                                }
                            }
                        >
                            <Image source={require('../static/images/todolist.png')} />                    
                            <Text style={{color: '#003300'}}>เรียกเก็บ</Text>                        
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const DrawerNav = DrawerNavigator(
    {
      หน้าหลัก: { screen: HomeScreen },
      สมาชิก: { screen: Profile },
      สมาคม: { screen: Association },
      หนี้สิน: { screen: Debt }
    },
)
  
export default DrawerNav
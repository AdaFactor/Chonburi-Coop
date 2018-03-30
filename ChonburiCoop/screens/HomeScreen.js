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

import { DrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation'
import { Header, Icon } from 'react-native-elements'

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
import LoginScreen from './LoginScreen';

class HomeScreen extends React.Component {
    render() {
        var userId = this.props.navigation.state.params.id_user
        return(
            <View style={styles.contrainer}>
                <Header
                    leftComponent={
                        <Icon 
                            name='menu' 
                            onPress={() => {this.props.navigation.navigate('DrawerOpen', { id_user: userId })}}
                            color='#fff'
                        />
                    }
                    centerComponent={{ text: 'หน้าหลัก', style: { color: '#fff', fontSize: 16 } }}
                    rightComponent={
                        <Icon 
                            name='email' 
                            onPress={() => {this.props.navigation.navigate('NewsScreen', { id_user: userId })}}
                            color='#fff'
                        />
                    }
                    // statusBarProps={{ translucent: true }}
                    backgroundColor='#248f24'
                />
                
                <SwiperScreen />
                <View style={{justifyContent: 'center', alignItems: 'center', height: '45%', backgroundColor: '#ffffff'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <TouchableOpacity 
                            style={styles.bill}
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
                            style={styles.money}
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
                            style={styles.guarantee}
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
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.receive}
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
                            style={styles.calculator}
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
                            style={styles.todolist}
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
        );
    }
}
const CustomDrawerContentComponent = (props) => {
    id_user = props.navigation.state.params.id_user
    return (
        <View style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <Header
                centerComponent={{ text: id_user.toString(), style: { color: '#fff' } }}
                backgroundColor='#2a2c32'
            />
            <DrawerItems {...props} />
        </View>
    );
}

const DrawerNav = DrawerNavigator(
    {
        หน้าหลัก: { screen: HomeScreen },
        สมาชิก: { 
            screen: Profile 
        },
        สมาคม: { screen: Association },
        หนี้สิน: { screen: Debt },
        ใบเสร็จ: { 
            screen: Bill,
            navigationOptions: {
                drawerLabel: () => null
            }
        },
        เงินฝาก: { 
            screen: Saving,
            navigationOptions: {
                drawerLabel: () => null
            }
        },
        ค้ำประกัน: { 
            screen: Guarantee,
            navigationOptions: {
                drawerLabel: () => null
            }
        },
        ปันผล: { 
            screen: Dividend,
            navigationOptions: {
                drawerLabel: () => null
            }
        },
        คำนวนเงินกู้: { 
            screen: Calculator,
            navigationOptions: {
                drawerLabel: () => null
            }
        },
        รายการเรียกเก็บ: { 
            screen: chargedList,
            navigationOptions: {
                drawerLabel: () => null
            }
        },
        ออกจากระบบ: { screen: LoginScreen }
    },
    {
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',        
    }
)
  
export default DrawerNav
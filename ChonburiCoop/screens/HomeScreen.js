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
    Keyboard
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
            memberName: ''
        }
    }

    render() {
        let userId = this.props.navigation.state.params.id_user
        let name = this.props.navigation.state.params.memberName
        return(
            <View style={styles.contrainer}>
                <Header
                    centerComponent={{ text: 'หน้าหลัก', style: { color: '#fff', fontSize: 16 } }}
                    rightComponent={
                        <Icon 
                            name='email' 
                            onPress={() => {this.props.navigation.navigate('NewsScreen', { id_user: userId, memberName: name })}}
                            color='#fff'
                        />
                    }
                    // statusBarProps={translucent= Platform.OS === 'ios' ? false : true }
                    backgroundColor='#248f24'
                />
                <SwiperScreen />

                <ScrollView style={{flex:1}} >
                    <View style={{flex: 1}}>
                        <View style={{justifyContent: 'center', height:'100%',backgroundColor: '#ffffff'}}>
                            <View style={{flexDirection: 'row'}}>
                                <LinearGradient colors={['#B2D732', '#71881B', '#2B3409']} style={styles.menuBtn}>
                                    <TouchableOpacity style={styles.menuBtn}
                                        onPress={
                                            () => { 
                                                this.props.navigation.navigate('Profile', { id_user: userId })
                                            }
                                        }
                                    >
                                        <Icon name='account-circle' color='#fff' size={50} />
                                
                                        {/* <Image source={require('../static/images/receive.png')} />                     */}
                                        <Text style={{color: '#fff'}}>สมาชิก</Text>                        
                                    </TouchableOpacity>
                                </LinearGradient>

                                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.menuBtn}>
                                    <TouchableOpacity 
                                        style={styles.menuBtn}
                                        onPress={
                                            () => { 
                                            this.props.navigation.navigate('Association', { id_user: userId })
                                            }
                                        }
                                    >
                                        <Icon name='group' color='#fff' size={50} />
                                        <Text style={{color: '#fff'}}>สมาคม</Text>                        
                                    </TouchableOpacity>
                                </LinearGradient>
                                
                                <LinearGradient colors={['#FE9772', '#FD4D0C', '#A22C02']} style={styles.menuBtn}>
                                    <TouchableOpacity 
                                        style={styles.menuBtn}
                                        onPress={
                                            () => { 
                                            this.props.navigation.navigate('Debt', { id_user: userId })
                                            }
                                        }
                                    >
                                        <Icon name='group' color='#fff' size={50} />
                                        <Text style={{color: '#fff'}}>หนี้สิน</Text>                        
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <TouchableOpacity 
                                    style={styles.bill}
                                    onPress={
                                        () => { 
                                        this.props.navigation.navigate('Bill', { id_user: userId, memberName: name })
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
                                        this.props.navigation.navigate('Saving', { id_user: userId, memberName: name })
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
                                        this.props.navigation.navigate('Guarantee', { id_user: userId, memberName: name })
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
                                        this.props.navigation.navigate('Dividend', { id_user: userId, memberName: name })
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
                                        this.props.navigation.navigate('Calculator', { id_user: userId , memberName: name})
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
                                        this.props.navigation.navigate('chargedList', { id_user: userId , memberName: name})
                                        }
                                    }
                                >
                                    <Image source={require('../static/images/todolist.png')} />                    
                                    <Text style={{color: '#003300'}}>เรียกเก็บ</Text>                        
                                </TouchableOpacity>
                            </View>
                        
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}



// const CustomDrawerContentComponent = (props) => {
//     let id_user = props.navigation.state.params.id_user
//     let name = props.navigation.state.params.memberName
//     return (
//         <View style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//             <Header
//                 centerComponent={{ text: name, style: { color: '#fff', fontSize: 16 } }}
//                 backgroundColor='#2a2c32'
//             />
//             <DrawerItems {...props} />
//         </View>
//     )
// }

// const DrawerNav = DrawerNavigator(
//     {
//         หน้าหลัก: { screen: HomeScreen },
//         สมาชิก: { 
//             screen: Profile 
//         },
//         สมาคม: { screen: Association },
//         หนี้สิน: { screen: Debt },
//         ใบเสร็จ: { 
//             screen: Bill,
//             navigationOptions: {
//                 drawerLabel: () => null
//             }
//         },
//         เงินฝาก: { 
//             screen: Saving,
//             navigationOptions: {
//                 drawerLabel: () => null
//             }
//         },
//         ค้ำประกัน: { 
//             screen: Guarantee,
//             navigationOptions: {
//                 drawerLabel: () => null
//             }
//         },
//         ปันผล: { 
//             screen: Dividend,
//             navigationOptions: {
//                 drawerLabel: () => null
//             }
//         },
//         คำนวนเงินกู้: { 
//             screen: Calculator,
//             navigationOptions: {
//                 drawerLabel: () => null
//             }
//         },
//         รายการเรียกเก็บ: { 
//             screen: chargedList,
//             navigationOptions: {
//                 drawerLabel: () => null
//             }
//         },
//         ออกจากระบบ: { screen: LoginScreen }
//     },
//     {
//         contentComponent: CustomDrawerContentComponent,
//         drawerOpenRoute: 'DrawerOpen',
//         drawerCloseRoute: 'DrawerClose',
//         drawerToggleRoute: 'DrawerToggle',        
//     }
// )
  
// export default DrawerNav
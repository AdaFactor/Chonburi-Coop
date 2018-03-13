import React, { Component } from 'react'
import { Platform, StyleSheet, Image, Alert, TouchableOpacity, View } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import Drawer from 'react-native-drawer'

import Login from './Login'
import Home from './Home'
import Bill from './Bill'
import Saving from './Saving'
import Guarantee from './Guarantee'
import Calculator from './Calculator'
import Profile from './Profile'
import Association from './Association'
import SlideMenu from './SlideMenu'

export default class Routes extends React.Component {
    closeSlideMenu = () => {
        this._drawer.close()
    }

    openSlideMenu = () => {
        this._drawer.open()
    }

    render () {
        let that = this
        let createLeftButton = () => {
            return (
                <View stype={{ marginTop: -5 }}>
                    <TouchableOpacity transparent style={styles.menuButton} onPress={() => that.openSlideMenu()}>
                        <Image style={styles.barIcon} source={require('../static/images/menu.png')} />
                    </TouchableOpacity>
                </View>
            )
        }

        let createRightButton = () => {
            return (
                <View stype={{ marginTop: -5 }}>
                    <TouchableOpacity transparent style={styles.inboxButton} onPress={() => {return null}}>
                        <Image style={styles.barIcon} source={require('../static/images/inbox.png')} />
                    </TouchableOpacity>
                </View>
            )
        }


        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<SlideMenu closeDrawer={this.closeSlideMenu} />}
                // tabToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closeDraweroffset={-3}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2-ratio)/2 }
                })}
            >
                <Router>
                    <Scene 
                        key="root" 
                        titleStyle={{ color: '#fff' }}
                        renderLeftButton={createLeftButton}
                        renderRightButton={createRightButton}                        
                        navigationBarStyle={{ backgroundColor: '#26B21F' }}
                    >
                        <Scene key="login"  component={Login} title='Login' initial={true} hideNavBar={true} />
                        <Scene key = "home"  component={Home} title='Coop Chonburi' hideBackImage />
                        <Scene key = "bill"  component={Bill}  title='ใบเสร็จรับเงิน' />
                        <Scene key = "saving" component={Saving} title='เงินฝาก' />
                        <Scene key = "guarantee" component={Guarantee} title='การค้ำประกัน' />
                        <Scene key = "calculator" component={Calculator} title='คำนวณเงินกู้' />
                        <Scene key = "profile" component={Profile} title='สมาชิก' />
                        <Scene key = "association" component={Association} title='สมาคมฯ' />                                                            
                        {/* <Scene key = "description" component={Description} title='รายละเอียดการค้ำประกัน' />                                                             */}
                        
                    </Scene>
                </Router>
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#26B21F',
        opacity: 1
    },
    menuButton: {
        paddingLeft: 20
    },
    inboxButton: {
        paddingRight: 10        
    },
    barIcon: {
        width: 30,
        height: 30,
    }
});
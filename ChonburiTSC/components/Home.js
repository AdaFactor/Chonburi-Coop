import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    ImageBackground 
} from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import BottomNav from './BottomNav'

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.contrainer}>
                <View style={styles.welcome}>
                    <ImageBackground source={require('../static/images/welcome.png')} style={styles.welcomeImage}>
                        <Text style={{color: '#fff', fontSize: 20}}>สหกรณ์ออมทรัพย์ครูชลบุรี จำกัด</Text>
                    </ImageBackground>                                        
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', height: '45%', backgroundColor: '#ffffff'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <TouchableOpacity style={styles.bill} onPress={() => { Actions.bill() }}>
                            <Image source={require('../static/images/bill.png')} />
                            <Text style={{color: '#000066'}}>ใบเสร็จ</Text>
                        </TouchableOpacity>                        
                        <TouchableOpacity style={styles.money} onPress={() => { Actions.saving() }}>
                            <Image source={require('../static/images/money.png')} />
                            <Text style={{color: '#0099cc'}}>เงินฝาก</Text>                        
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.guarantee} onPress={() => { Actions.guarantee() }}>
                            <Image source={require('../static/images/guarantee.png')} />                                
                            <Text style={{color: '#996633'}}>ค้ำประกัน</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.receive}>
                            <Image source={require('../static/images/receive.png')} />                    
                            <Text style={{color: '#ff6600'}}>ปันผล</Text>                        
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.calculator} onPress={() => { Actions.calculator() }}>
                            <Image source={require('../static/images/calculator.png')} />                    
                            <Text style={{color: '#cc0099'}}>คำนวณเงินกู้</Text>                        
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.todolist}>
                            <Image source={require('../static/images/todolist.png')} />                    
                            <Text style={{color: '#003300'}}>เรียกเก็บ</Text>                        
                        </TouchableOpacity>
                    </View>
                </View>

                <BottomNav />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
    },
    welcome: {
        backgroundColor: '#00b3b3', 
        alignItems: 'center',
        justifyContent: 'flex-end',         
        height: '45%',
    },
    welcomeImage: {
        width: '100%',
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        margin: 10,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,        
        backgroundColor: '#006666',
    },
    bill: {
        margin: 10,                
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#e6e6ff',
        borderRadius: 50,
    },
    money: {
        margin: 10,                
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#e6f9ff',
        borderRadius: 50,
    },
    guarantee: {
        margin: 10,                
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f9f2ec',
        borderRadius: 50,
    },
    receive: {
        margin: 10,        
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#fff0e6',
        borderRadius: 50,
    },
    calculator: {
        margin: 10,        
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#ffe6f9',
        borderRadius: 50,
    },
    todolist: {
        margin: 10,        
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#e6ffe6',
        borderRadius: 50,
    }
});
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Image, 
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native'
import { Input, Button, Card, Header, Icon } from 'react-native-elements'
// import axios from 'axios'
import Frisbee from 'frisbee'

const assList = [
    { register: '0070', name: 'นายสินใจ โรจน์ไพฑูนย์', type_member: 'กอง1-สมาชิก' },
    { register: '006297', name: 'นายสินใจ โรจน์ไพฑูนย์', type_member: 'ประกัน 15000000 บาท' },
    { register: '0293272', name: 'นายสินใจ โรจน์ไพฑูนย์', type_member: 'ครูไทย-สมาชิก' },
    { register: '0046230', name: 'นายสินใจ โรจน์ไพฑูนย์', type_member: 'ชุมนุม-สมาชิก' },    

]

const api = new Frisbee({
    baseURI: 'http://www.chtsc.com/check_loan',
    headers: {
      'Accept': 'text/html',
      'Content-Type': 'text/html; charset=Windows-874'
    }
})



export default class Association extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            name: '',
            register: '',
            association: ''
        }
    }
    
    // componentDidMount() {
    //     this.dataAssoiation().done()
    // }
    
    // async dataAssoiation() {
    //     try {
    //         let response = await api.get('/member_detail.php?ssid=202695&tab=5', {
    //             headers: {
    //                 'Accept': 'text/html',
    //                 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    //             }
    //         })
    //         console.log(response)
    //         let responseJson = await response.text()
    //         console.log(responseJson)
            
    //         // this.setState({ association: responseJson })
    //     }
    //     catch (err) {
    //         console.log(err)
            
    //     }
    // }

    componentDidMount = () => {
        ssid = 'ssid=202695'
        tab = '&tab=5'
        url = 'http://www.chtsc.com/check_loan/member_detail.php?' + ssid + tab;
        // url = 'https://it-madmonster.blogspot.com/2009/12/web-content-type.html'
        
        fetch(
            url,
            {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'text/html;charset=windows-874',
                    'Accept-Charset': 'windows-874',
                    'Content-Language': 'en',
                    'Accept-Language': 'th',
                    
                }),
            }
        )
        .then((res) => res.text())
        .then((result) => {
            // console.log("ada")
            // console.log(result)
            const lines = result.split('\n')
            for (let line = 51; line < lines.length; line++) {
                const newLine = lines[line].trim()
                const td = newLine.includes('<td')
                if (td == true) {
                    console.log(line + ":" + newLine)
                    if ( line%2 == 1 ) {
                        var registerNew = newLine.slice(4, -5)
                    }
                    else if ( line%2 == 0 ) {
                        var nameNew = newLine.slice(4, -5)
                    }

                    const json = JSON.parse(JSON.stringify({
                        key: registerNew,
                        value: nameNew,
                    }))
                    this.setState({ data: this.state.data.concat(json) })
                }
                
            }
            
        })
    }

    render() {
        // this.state.data.push({ key: this.state.register, value: this.state.name })
        console.log(this.state.data)
        return (
            <View style={ styles.contrainer }>
                <Header
                    leftComponent={
                        <Icon 
                        name='menu' 
                        onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
                        color='#fff'
                        />
                    }
                    centerComponent={{ text: 'สมาคม', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'email', color: '#fff' }}
                    statusBarProps={{ translucent: true }}
                    backgroundColor='#33cc33'
                />
                <ScrollView contentContainerStyle={{ marginBottom: 10 }}>
                {
                    this.state.data.map(( itemAss, i) => (
                        <Card key={i} containerStyle={ styles.content }>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={{ fontWeight: 'bold' }}>ทะเบียนสมาคม:</Text>
                                    <Text style={{ fontWeight: 'bold' }}>ชื่อ-นามสกุล:</Text>
                                </View>

                                <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                    <Text>{ itemAss.key }</Text>
                                    <Text>{ itemAss.value }</Text>
                                </View>                            
                            </View>
                        </Card>
                    ))
                }
                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: '#ffffe6'
  },
  content: {
    borderColor: '#b3b300', 
  }
})

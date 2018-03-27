import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Image, 
  TouchableOpacity,
  ScrollView 
} from 'react-native'
import { Input, Button, Card, Header, Icon } from 'react-native-elements'

const assList = [
    { register: '0070', name: 'นายสินใจ โรจน์ไพฑูนย์', type_member: 'กอง1-สมาชิก' },
    { register: '006297', name: 'นายสินใจ โรจน์ไพฑูนย์', type_member: 'ประกัน 15000000 บาท' },
    { register: '0293272', name: 'นายสินใจ โรจน์ไพฑูนย์', type_member: 'ครูไทย-สมาชิก' },
    { register: '0046230', name: 'นายสินใจ โรจน์ไพฑูนย์', type_member: 'ชุมนุม-สมาชิก' },    

]

export default class Association extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[{
                key: '',
                value: ''
            }],
            name: '',
            register: '',
        }
    }

    componentDidMount = () => {
        fetch( 'http://www.chtsc.com/check_loan/member_detail.php?ssid='+ this.props.navigation.state.params.id_user +'&tab=5', { 
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'text/html;charset=UTF-8'
            })
        })
        .then(res => res.text())
        .then((result) => {
            // console.log(result)
            const lines = result.split('\n')
            for (let line = 51; line < lines.length; line++) {
                const newLine = lines[line].trim()
                const td = newLine.includes('<td')
                if (td == true) {
            //         // console.log(newLine.length)
                    console.log(line + ":" + newLine)
                    if ( line%2 == 1 ) {
                        const registerNew = newLine.slice(4, -5)
                        this.setState({ register: registerNew })
                        this.state.data.push({ key: registerNew })                        
                    } else if ( line%2 == 0 ) {
                        const nameNew = newLine.slice(4, -5)
                        this.setState({ name: nameNew })
                        this.state.data.push({ value: nameNew })                        
                    }
                }
            }
        })
        .catch((error) => { console.log(error) })
    }

    render() {
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
                    // statusBarProps={{ translucent: true }}
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

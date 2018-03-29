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

    componentDidMount = () => {
        ssid = 'ssid=' + this.props.navigation.state.params.id_user
        tab = '&tab=5'
        url = 'http://www.chtsc.com/check_loan/member_detail.php?' + ssid + tab;
        
        fetch(
            url,
            {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'text/html;charset=windows-874',
                    'Accept-Charset': 'windows-874',
                    'Content-Language': 'th',
                    
                }),
            }
        )
        .then((res) => res.text())
        .then((result) => {
            const lines = result.split('\n')
            for (let line = 51; line < lines.length; line++) {
                const newLine = lines[line].trim()
                const td = newLine.includes('<td')
                if (td == true) {
                    if ( line%2 == 1 ) {
                        var registerNew = (newLine.slice(4, -5)).trim()
                    }
                    else if ( line%2 == 0 ) {
                        var nameNew = (newLine.slice(4, -5)).trim()
                        const json = JSON.parse(JSON.stringify({
                            key: registerNew,
                            value: nameNew,
                        }))
                        this.setState({ data: this.state.data.concat(json) })
                    }
                }
            }
        })
    }

    render() {
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
                    centerComponent={{ text: 'สมาคม', style: { color: '#fff', fontSize: 16 } }}
                    rightComponent={{ icon: 'email', color: '#fff' }}
                    statusBarProps={{ translucent: true }}
                    backgroundColor='#248f24'
                />
                <ScrollView style={{ marginBottom: 15 }}>
                {
                    this.state.data.map(( itemAss, i) => (
                        <Card key={i} containerStyle={ styles.content }>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '40%' }}>
                                    <Text style={{ fontWeight: 'bold' }}>ทะเบียนสมาคม:</Text>
                                    <Text style={{ fontWeight: 'bold' }}>ชื่อ-นามสกุล:</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end' }}>
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

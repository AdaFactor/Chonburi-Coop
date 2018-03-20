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
                centerComponent={{ text: 'สมาคม', style: { color: '#fff' } }}
                rightComponent={{ icon: 'email', color: '#fff' }}
                statusBarProps={{ translucent: true }}
                backgroundColor='#33cc33'
            />
            <ScrollView contentContainerStyle={{ marginBottom: 10 }}>
            {
                assList.map(( itemAss, i) => (
                    <Card key={i} containerStyle={ styles.content }>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontWeight: 'bold' }}>ทะเบียนสมาคม:</Text>
                                <Text style={{ fontWeight: 'bold' }}>ชื่อ-นามสกุล:</Text>
                                <Text style={{ fontWeight: 'bold' }}>ประเภทสมาชิก:</Text>
                            </View>

                            <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                <Text>{ itemAss.register }</Text>
                                <Text>{ itemAss.name }</Text>
                                <Text>{ itemAss.type_member }</Text>
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

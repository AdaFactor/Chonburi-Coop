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
            association: []
        }
    }

    componentDidMount = () => {
        ssid = 'ssid=' + this.props.navigation.state.params.id_user
        tab = '&tab=5'
        url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab;
        
        fetch(
            url,
            { method: 'get' }
        )
        .then((res) => res.json())
        .then((result) => { this.setState({ association: result }) })
    }

    render() {
        let name = this.props.navigation.state.params.memberName
        
        return (
            <View style={ styles.contrainer }>
                <Header
                    leftComponent={
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={() => {this.props.navigation.navigate('HomeScreen',  {id_user: this.props.navigation.state.params.id_user })}}
                        >
                            <Icon 
                                name='home' 
                                color='#fff'
                            />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'สมาคม', style: { color: '#fff', fontSize: 16 } }}
                    // rightComponent={
                    //     <Icon 
                    //         name='email' 
                    //         onPress={() => {this.props.navigation.navigate('NewsScreen',  {id_user: this.props.navigation.state.params.id_user })}}
                    //         color='#fff'
                    //     />
                    // }
                    backgroundColor='#248f24'
                />
                <ScrollView style={{ marginBottom: 15 }}>
                {
                    this.state.association.map(( itemAss, i) => (
                        <Card key={i} containerStyle={ styles.content }>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '40%' }}>
                                    <Text style={{ fontWeight: 'bold' }}>ทะเบียนสมาคม:</Text>
                                    <Text style={{ fontWeight: 'bold' }}>ชื่อ-นามสกุล:</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end' }}>
                                    <Text>{ itemAss.char_no }</Text>
                                    <Text>{ itemAss.char_name }</Text>
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
    // backgroundColor: '#ffffe6'
  },
  content: {
    borderColor: '#b3b300', 
  }
})

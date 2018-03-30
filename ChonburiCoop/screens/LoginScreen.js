import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native'

var formBody = []

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      ssid: '',
      name: '',
    }
  }

  handleUsername = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = ( user , pass ) => {
    if (user == '' || pass == '') {
      alert('username or password cannot null')
    } 
    else if ( user * 24 + 15 == this.state.ssid ) {
      this.props.navigation.navigate('HomeScreen', { id_user: this.state.ssid })
      // console.log( this.state.ssid )
    }
    else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')      
    }
  }

  componentDidMount = (id, mpassword) => {
    var formData = new FormData()
    formData.append('id', id)
    formData.append('mpassword', mpassword)    

    fetch('http://www.chtsc.com/check_loan/get_data/mobile_login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData
    })
    .then((res) => res.json())
    .then((resJson) => {
      if ( resJson.status == 200 ){ 
        this.props.navigation.navigate('HomeScreen', { id_user: resJson.ssid })
      } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      }
      console.log(resJson)
      // const ssid = resJson.indexOf("ssid=")
      // const sid = resJson.slice(251, 257)
      // this.setState({ ssid: sid})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          // ref={(ref) => {this.username = ref}}
          onChangeText={this.handleUsername}
          placeholder= 'Username'  //{this.state['username']}
          placeholderTextColor='#fff'
          style={ styles.input }
          returnKeyType='next'
          underlineColorAndroid='transparent'
          clearTextOnFocus
        />

        <TextInput
          // ref={(ref) => {this.password = ref}}
          onChangeText={this.handlePassword}          
          placeholder='Password'
          placeholderTextColor='#fff'            
          secureTextEntry        
          style={ styles.input }
          underlineColorAndroid='transparent'
          clearTextOnFocus
        />

        <TouchableOpacity 
          style={styles.buttonLogin} 
          onPress={
            () => { 
              this.componentDidMount(this.state.username, this.state.password)
            }
          }
        >
          <Text style={{ color: '#fff' }}>เข้าสู่ระบบ</Text>          
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF85BA',
      padding: 30
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    input: {
      height: 40,
      width: '100%',      
      backgroundColor: '#FFAED8',
      marginBottom: 15,
      padding: 10
    },
    buttonLogin: {
      height: 35,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#B21970',
      borderRadius: 10
    }
});
  
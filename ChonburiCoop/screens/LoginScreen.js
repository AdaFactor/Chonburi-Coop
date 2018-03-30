import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

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

  _login = (id, mpassword) => {
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
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <ImageBackground source={require('../static/images/welcome.png')} style={styles.welcomeImage}>
        <View 
          style={styles.container}
        >
          <KeyboardAvoidingView behavior="padding" style={styles.form}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>สหกรณ์ออมทรัพย์ครูชลบุรี จำกัด</Text>
            </View>
            <TextInput
              onChangeText={(text) => this.setState({ username: text })}
              value={this.state.username}              
              placeholder= 'Username'
              placeholderTextColor='#737373'
              style={ styles.input }
              returnKeyType='next'
              underlineColorAndroid='transparent'
              clearTextOnFocus
            />

            <TextInput
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              placeholder='Password'
              placeholderTextColor='#737373'            
              secureTextEntry        
              style={ styles.input }
              underlineColorAndroid='transparent'
              clearTextOnFocus
            />

            <TouchableOpacity 
              style={styles.buttonLogin} 
              onPress={
                () => { 
                  this._login(this.state.username, this.state.password)
                }
              }
            >
              <Text style={{ color: '#fff' }}>เข้าสู่ระบบ</Text>          
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    input: {
      height: 40,
      width: '100%',      
      backgroundColor: '#f2f2f2',
      marginBottom: 15,
      padding: 10,
      borderColor: '#d9d9d9',
      borderWidth: 1,
      opacity: 0.7
    },
    buttonLogin: {
      height: 35,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#B21970',
      borderRadius: 10
    },
    welcomeImage: {
      width: '100%',
      height: '100%',
      padding: 30
      
    },
});
  
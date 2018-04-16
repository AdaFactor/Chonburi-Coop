import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Alert,
  Image,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  BackAndroid,
  BackHandler,
} from 'react-native'
import { SocialIcon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'
import ModalDropdown from 'react-native-modal-dropdown'
import phones from '../static/json/phones.json'

var formBody = []

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      ssid: '',
      name: '',
      isLoggingIn: false,
      phones_num: phones
    }
  }

  getInitialState() {
    return this.state
  }

  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  handleBackButton = () => {
    // Alert.alert(
    //   'ออกจากแอปพลิเคชัน',
    //   'คุณต้องการออกจากแอปพลิเคชันหรือไม่?', [{
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel'
    //   }, {
    //     text: 'OK',
    //     onPress: () => {
    //       BackHandler.exitApp()
    //       return this.state
    //     }
    //   }, ], {
    //     cancelable: false
    //   }
    // )
    return true;
  } 
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
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
        fetch('http://www.chtsc.com/check_loan/get_data/php2json.php?ssid=' + resJson.ssid + '&tab=3')
        .then((resp) => resp.json())
        .then((response) => {
          this.props.navigation.navigate(
            'HomeScreen', 
            { 
              memberName: response[0].member_name,
              id_user: resJson.ssid,
              username: this.state.username
            }
          )
        })
        
      } else {
        Alert.alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
        console.log(phones)
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
                  Keyboard.dismiss()                  
                }
              }
            >
              <Text style={{ color: '#fff' }}>เข้าสู่ระบบ</Text>          
            </TouchableOpacity>
            
            <ModalDropdown
              style={{ margin: 10, padding: 6, width: '100%', backgroundColor: '#fff' }}
              dropdownStyle={{ padding: 5, width: '70%' }}
              defaultValue="เบอร์โทร บริการสมาชิก..."
              options={phones}
              renderButtonText={(data) => {
                return `${data.department}: ${data.phone_num}`
              }}
              renderRow={(data, id, i) => {
                return (
                  <TouchableOpacity>
                    <Text>{ `${data.department}: ${data.phone_num}` }</Text>
                  </TouchableOpacity>
                )
              }}
            />
            {/* <Dropdown
              label="ติดต่อ" 
              data={contactData}
              containerStyle={{ margin: 10, padding: 10, paddingTop: 0, paddingBottom: 0, width: '100%', backgroundColor: '#fff' }}
            /> */}
          </KeyboardAvoidingView>
          
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.social} onPress={()=>{ Linking.openURL('https://www.facebook.com/chtsc/') }}>
              <Image source={require('../static/images/socials/facebook.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.social} onPress={()=>{ Linking.openURL('https://www.facebook.com/messages/t/chtsc') }}>
              <Image source={require('../static/images/socials/messenger.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.social} onPress={()=>{ Linking.openURL('http://line.me/ti/p/~@kruchoncoop') }}>
              <Image source={require('../static/images/socials/line.png')} /> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.social} onPress={()=>{ Linking.openURL('http://www.chtsc.com') }}>
              <Image style={{width: 50, height: 50}} source={require('../static/images/socials/logo_chtsc.png')} /> 
            </TouchableOpacity>
          </View>
          
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
      opacity: 0.7,
    },
    buttonLogin: {
      height: 35,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#B21970',
      borderRadius: 10,
    },
    welcomeImage: {
      width: '100%',
      height: '100%',
      padding: 30,
      
    },
    social: {
      marginLeft: 10,
      marginRight: 10,
    }
});
  
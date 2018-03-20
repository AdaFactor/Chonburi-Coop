import React, { Component } from 'react'
import { 
  StyleSheet, 
  View, 
  Image,
  TextInput, 
  KeyboardAvoidingView,
  AsyncStorage,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'

import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Button, Card } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import styles from '../static/css/home-style'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFocused: false,
      isLoggedIn: false,
      username: '',
      password: '',
    }
  }

  userLogin() {
    Actions.home();
    console.log("success")
  }

  onFocusChange = () => {
    this.setState({ isFocused: true });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.containerLogin}>
        <ScrollView keyboardShouldPersistTaps='never'>
            <View style={styles.logo} >
              <Image source={require('../static/images/users.png')} />      
            </View>
            
            <TextInput
              maxLength={6}
              returnKeyType='next'
              placeholder="เลขทะเบียน (6 หลัก)"
              placeholderTextColor='#fff'
              style={ styles.input }
              underlineColorAndroid='transparent'
            />

            <TextInput
              placeholder="รหัสผ่าน"            
              placeholderTextColor='#fff'             
              style={styles.input} 
              secureTextEntry={true}
              underlineColorAndroid='transparent'
            />

            <TouchableOpacity 
              style={styles.btnLogin} 
              onPress={
                () => { 
                  this.props.navigation.navigate('Home')
                }
              }
            >
              <Text style={styles.btnText}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}


import React, { Component } from 'react'
import { 
  StyleSheet, 
  View, 
  Image,
  TextInput, 
  KeyboardAvoidingView,
  YellowBox,
  AsyncStorage,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'
import { Button, Card } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      username: '',
      password: '',
    }
  }
  
    // YellowBox.ignoreWarnings([
    //   'Warning: componentWillMount is deprecated',
    //   'Warning: componentWillReceiveProps is deprecated',
    // ]);


  userLogin() {
    Actions.home();
    console.log("success")
  }

  onPress = () => {
    Actions.home();
    // console.log("success")    
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='never' >
          <View style={styles.containerLogin}>
            <View style={styles.logo} >
              <Image source={require('../static/images/users.png')} />      
            </View>
            
            <TextInput
              ref='username'
              maxLength={6}
              returnKeyType='next'
              onChangeText={(username) => this.setState({username})}
              placeholder="เลขทะเบียน (6 หลัก)"
              placeholderTextColor='#fff'
              style={ styles.input }
              underlineColorAndroid='transparent'
            />

            <TextInput
              ref='password'
              onChangeText={(password) => this.setState({password})}
              placeholder="รหัสผ่าน"            
              placeholderTextColor='#fff'             
              style={styles.input} 
              secureTextEntry={true}
              underlineColorAndroid='transparent'
            />

            <TouchableOpacity style={styles.btnLogin} onPress={() => {this.onPress}} >
              <Text style={styles.btnText}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF85BA',        
  },
  containerLogin: {
    padding: 20
  },
  logo: {
    alignItems: 'center',
    margin: '10%'
  },
  input: {
    height: 40,
    backgroundColor: '#FFAED8',
    marginBottom: 15,
    padding: 10
  },
  logintext: {
    fontSize: 20,
    textAlign: 'center',
    color: '#B21970',    
    margin: 10,
  },
  btnLogin: {
    alignItems: 'center',
    backgroundColor: '#B21970',
    borderRadius: 10
  },
  btnText: {
    color: '#fff',
    padding: 10
  }
});

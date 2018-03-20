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

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            placeholder='Username'
            style={ styles.input }
            returnKeyType='next'
            ref={() => this.username}
            underlineColorAndroid='transparent'
        />

        <TextInput
            placeholder='Password' 
            secureTextEntry        
            style={ styles.input }
            underlineColorAndroid='transparent'
        />

        <TouchableOpacity 
          style={styles.buttonLogin} 
          onPress={
            () => { 
              this.props.navigation.navigate('HomeScreen')
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
  
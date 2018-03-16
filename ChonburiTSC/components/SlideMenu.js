import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Image, 
  TouchableOpacity,
  TouchableHighlight,
  ScrollView 
} from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer'

export default class SlideMenu extends React.Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  onAssociationPress() {
    Actions.association()
  }

  render() {
    let {closeDrawer} = this.props
    
    return (
        <View style={ styles.contrainer }>
            <ScrollView>
                <View style={ styles.userMenu }>
                  <View style={{ width: '20%', alignItems: 'center' }}>
                    <Image source={require('../static/images/profile-bottom.png')}  />                    
                  </View>
                  <View style={{ width: '60%', paddingLeft: 10 }}>
                    <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>Username</Text>                    
                  </View>
                  <TouchableHighlight style={{ width: '20%', alignItems: 'center' }} onPress={closeDrawer}>
                    <Image source={require('../static/images/cancel.png')}  />                    
                  </TouchableHighlight>
                </View>

                <TouchableHighlight style={styles.listMenu}>
                  <Text style={ styles.textList }>แก้ไขข้อมูล</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.listMenu} onPress={() => { Actions.profile() }}>
                  <Text style={ styles.textList }>สมาชิก</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.listMenu} onPress={() => this.onAssociationPress()} >
                  <Text style={ styles.textList }>สมาคมฯ</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.listMenu}>
                  <Text style={ styles.textList }>หนี้สิน</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.listMenu}>
                  <Text style={ styles.textList }>เปลี่ยนรหัส</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.listMenu}>
                  <Text style={ styles.textList }>ออกจากระบบ</Text>
                </TouchableHighlight>
            </ScrollView>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: '#666666'
  },
  userMenu: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#333333'
  },
  listMenu: {
    height: 50,
    padding: 20,
    justifyContent: 'center',
    borderBottomColor: "#fff",
    borderBottomWidth: 1    
  },
  textList: {
    color: '#ffffff', 
    fontSize: 16,
  }
})

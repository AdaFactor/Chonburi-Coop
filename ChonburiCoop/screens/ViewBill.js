import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  WebView,
  Linking
} from 'react-native'
import { Input, Button, Card, Header, Icon } from 'react-native-elements'
import { DrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation'

var formBody = []

export default class ViewBill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bill_data: [],
    }
  }

  render() {
    let username = this.props.navigation.state.params.username
    let recv_period = this.props.navigation.state.params.recv_period
    let seq = 'l;ylfu'
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => goBack() }
            >
              <Icon 
                name='arrow-back' 
                color='#fff'
              />
            </TouchableOpacity>
          }
          centerComponent={{ text: 'ใบเสร็จ', style: { color: '#fff', fontSize: 16 } }}
          backgroundColor='#248f24'
        />
            <WebView
                source={{
                    uri: 'http://www.chtsc.com/check_loan/viewdetailrcp.php', 
                    method: 'POST', 
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    body: "id=" + username + "&pid=" + recv_period + "&seqcode=" + seq
                }}
                style={{marginTop: 20}}
            />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e6e6ff'
  },
  dateBill: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  billCard: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBill: {
    padding: 3,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaaaaa'
  }
});

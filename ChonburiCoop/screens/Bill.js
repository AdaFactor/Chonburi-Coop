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
import Communications from 'react-native-communications'

export default class Bill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bill_data: [],
    }
  }
  
  componentDidMount = () => {
    ssid = 'ssid=' + this.props.navigation.state.params.id_user
    tab = '&tab=6'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab;
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
        this.setState({ bill_data: result })
        console.log(this.props.navigation.state.params.username)
    })
  }

  render() {
    return (
      <View style={styles.container}>
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
          centerComponent={{ text: 'ใบเสร็จ', style: { color: '#fff', fontSize: 16 } }}
          backgroundColor='#248f24'
        />
        <ScrollView style={{ marginBottom: 10 }}>
            {
              this.state.bill_data.map(( itemBill, i )=>(
                <Card 
                  containerStyle={{ borderColor: '#000066' }}
                  key={i} 
                  title={ 'เลขที่ใบเสร็จ: ' + itemBill.RECV_PERIOD }
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.dateBill}>
                      <Text>{ itemBill.RECV_DATE }</Text>                     
                    </View>
                    <View style={styles.billCard}>
                      <Text>จำนวน { itemBill.GSUM } บาท</Text>                      
                    </View>
                    <TouchableOpacity style={styles.viewBill} onPress={() => Communications.phonecall('0123456789', true) }>
                      <Text>ดูใบเสร็จ</Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              ))
            }
        </ScrollView>
      </View>
    );
  }
}

const ViewBill = () => {
  return (
    <WebView 
      source={{ uri: 'http://www.chtsc.com/check_loan/viewdetailrcp.php' }}
    />
  )
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

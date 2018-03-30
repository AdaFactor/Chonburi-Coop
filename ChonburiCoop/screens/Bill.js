import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView 
} from 'react-native'
import { Input, Button, Card, Header, Icon } from 'react-native-elements'
import { DrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation'

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
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
              <Icon
                name='arrow-back' 
                onPress={() => {this.props.navigation.navigate('HomeScreen',  { id_user: this.props.navigation.state.params.id_user })}}
                color='#fff'
              />
          }
          centerComponent={{ text: 'ใบเสร็จ', style: { color: '#fff', fontSize: 16 } }}
          // rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
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
                    <View style={styles.billCard}>
                      <Text>{ itemBill.RECV_DATE }</Text>                     
                    </View>
                    <View style={styles.billCard}>
                      <Text>จำนวน { itemBill.GSUM } บาท</Text>                      
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
  container: {
    flex: 1,
    backgroundColor: '#e6e6ff'
  },
  billCard: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

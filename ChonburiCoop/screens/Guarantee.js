import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { Input, Button, List, ListItem, Card, Header, Icon } from 'react-native-elements'
import formatMoney from 'accounting-js/lib/formatMoney.js'

export default class Guarantee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guarantee_data: [],
    }
  }

  componentDidMount = () => {
    ssid = 'ssid=' + this.props.navigation.state.params.id_user
    tab = '&tab=4'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab;
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
      this.setState({ guarantee_data: result })
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f2ec' }}>
        <Header
          centerComponent={{ text: 'การค้ำประกัน', style: { color: '#fff', fontSize: 16 } }}
          // rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#248f24'
        />
        <ScrollView>
          <View style={{ marginTop: 0, marginBottom: 10 }}>
            {
              this.state.guarantee_data.map(( item, i ) => (
                <View key={i} style={{backgroundColor: (i%2 == 0) ? '#996633' : '#ffffff',  padding: 10}}>
                  <View >
                    <Text 
                      style={{ 
                        color: (i%2 == 0) ? '#ffffff' : '#996633', 
                        fontWeight: 'bold',
                        fontSize: 18
                      }}
                    >{ item.member_name }</Text>                      
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%', marginTop: 5 }} >
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>สัญญาเงินกู้</Text>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>วันที่กู้</Text>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>เงินต้นคงเหลือ</Text>
                    </View>

                    <View style={{ width: '50%', marginTop: 5, alignItems: 'flex-end' }}>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>{ item.loan_id }</Text>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>{ item.loan_date }</Text>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>{ formatMoney(item.guarantee_amt*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                    </View>
                    
                  </View>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listHead: {
    alignItems: 'center',
  }
})

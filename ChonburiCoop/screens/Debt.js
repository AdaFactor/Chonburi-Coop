import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal 
} from 'react-native'
import { Card, Header, Icon } from 'react-native-elements'
import formatMoney from 'accounting-js/lib/formatMoney.js'

export default class Debt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      debt_data: [],
    }
  }
  
  componentDidMount = () => {
    ssid = 'ssid=' + this.props.navigation.state.params.id_user
    tab = '&tab=12'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab;
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
        this.setState({ debt_data: result })
    })
  }

  render() {
    let name = this.props.navigation.state.params.memberName
    
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'หนี้สิน', style: { color: '#fff', fontSize: 16 } }}
          rightComponent={
            <Icon 
                name='email' 
                onPress={() => {this.props.navigation.navigate('NewsScreen', {id_user: this.props.navigation.state.params.id_user, memberName: name })}}
                color='#fff'
            />
          }
          // statusBarProps={{ translucent: true }}
          backgroundColor='#248f24'
      />
        <ScrollView style={{ marginBottom: 10, padding: 10 }} >
            {
              this.state.debt_data.map(( itemDebts, i ) => (
                <View 
                    key={i} 
                    style={styles.listItem}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontSize: 25, color: '#5d4d2d', fontWeight: 'bold' }}>
                        { itemDebts.loan_id }
                      </Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text style={{ fontWeight: 'bold' }}>Date: { itemDebts.loan_date }</Text>                       
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ width: '50%' }}>
                      <Text>วงเงินกู้:</Text>
                      <Text>คงเหลือ:</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text style={{ color: '#555' }}>{ formatMoney(itemDebts.loan_amt*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                      <Text style={{ color: '#555' }}>{ formatMoney(itemDebts.loan_bal*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                      <Text style={{fontWeight: 'bold'}}>ผู้ค้ำประกัน</Text>
                      {
                        itemDebts.guarantor.map((g, ind) => (
                          <View key={ind}>
                            <Text>{ g.member_name }</Text>
                          </View>
                        ))
                      }
                    </View>
                  </View>
                </View>
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
    backgroundColor: '#ededee',
  },
  listItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

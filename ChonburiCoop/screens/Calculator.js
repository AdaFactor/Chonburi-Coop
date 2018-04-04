import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native'
import { Input, Button, Card, Header, Icon } from 'react-native-elements'
import formatMoney from 'accounting-js/lib/formatMoney.js'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guarantor_new: '',
      loanData: [],
      calculator: []
    }
  }

  componentDidMount = () => {
    ssid = 'ssid=' + this.props.navigation.state.params.id_user
    tab = '&tab=2'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
        this.setState({ calculator: result })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'คำนวนเงินกู้', style: { color: '#fff', fontSize: 16 } }}
          // rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#248f24'
      />
        <ScrollView style={{ marginBottom: 10 }} >
            {
              this.state.calculator.map(( itemCal, i ) => (                
                <View style={{ margin: 10, borderColor: '#cc0099', borderWidth: 1 }} key={ i }>
                  <View style={{flexDirection: 'row', backgroundColor: '#cc0099',  padding: 5}} >
                    <View style={{ width: '50%' }}>
                      <Text style={{ color: '#ffffff', fontSize: 18 }}>{ itemCal.loan_id }</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text style={{ color: '#ffffff' }}>{ itemCal.loan_date }</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', backgroundColor: '#e6e6e6',  padding: 5}}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontWeight: 'bold' }}>วงเงินกู้:</Text>
                      <Text style={{ fontWeight: 'bold' }}>คงเหลือ:</Text>
                    </View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text>{ formatMoney(itemCal.loan_amt*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                      <Text>{ formatMoney(itemCal.loan_bal*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
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
    backgroundColor: '#ffe6f9'
  },
  calCard: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

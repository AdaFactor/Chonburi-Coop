import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Card, Icon, Header } from 'react-native-elements'
import formatMoney from 'accounting-js/lib/formatMoney.js'

export default class Saving extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data_save: [],
    }
  }

  componentDidMount = () => {
    ssid = 'ssid=' + this.props.navigation.state.params.id_user
    tab = '&tab=1'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab;
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
      this.setState({ data_save: result })
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
          centerComponent={{ text: 'เงินฝาก', style: { color: '#fff', fontSize: 16 } }}
          backgroundColor='#248f24'
        />
        <ScrollView style={{ marginBottom: 10, backgroundColor: '#e6f9ff' }}>
          <View style={styles.container}>
            {
              this.state.data_save.map(( itemMoney, i ) => (
                <Card 
                  key={i}
                  containerStyle={{ borderColor: '#0099cc' }}
                  title={ itemMoney.account_name }
                  titleStyle={{ color: '#0099cc' }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={ styles.saveCard }>
                      <Text style={{ fontWeight: 'bold' }}>เลขที่:</Text>
                      <Text style={{ fontWeight: 'bold' }}>ประเภท:</Text>                      
                      <Text style={{ fontWeight: 'bold' }}>ดอกเบี้ย:</Text>
                      <Text style={{ fontWeight: 'bold' }}>เงินคงเหลือ(บาท):</Text>
                      
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text>{ itemMoney.member_id }</Text>
                      <Text>{ itemMoney.acc_type }</Text>                      
                      <Text>{ itemMoney.rate_1 }%</Text>
                      <Text>{ formatMoney(itemMoney.led_bal*1, { symbol: "บาท",  format: "%v %s" }) }</Text>                                           
                    </View>
                  </View>
                </Card>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f9ff'
  },
  saveCard: {
    width: '50%',
  }
});

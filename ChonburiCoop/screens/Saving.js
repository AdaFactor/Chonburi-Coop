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

const moneyList = [
  { number: '02000203', account_name: 'ชื่อ-นามสกุล', type: 'ออมทรัพย์พิเศษ', increase: '2.8%', balance: '1000.32'},
  { number: '02000204', account_name: 'ชื่อ-นามสกุล', type: 'ออมทรัพย์พิเศษ', increase: '2.8%', balance: '1001.32'},
  { number: '02000205', account_name: 'ชื่อ-นามสกุล', type: 'ออมทรัพย์พิเศษ', increase: '2.8%', balance: '1002.32'},
  { number: '02000206', account_name: 'ชื่อ-นามสกุล', type: 'ออมทรัพย์พิเศษ', increase: '2.8%', balance: '1003.32'},
  { number: '02000207', account_name: 'ชื่อ-นามสกุล', type: 'ออมทรัพย์พิเศษ', increase: '2.8%', balance: '1004.32'},  
]

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
            <Icon
              name='arrow-back' 
              onPress={() => {this.props.navigation.navigate('HomeScreen',  { id_user: this.props.navigation.state.params.id_user })}}
              color='#fff'
            />
          }
          centerComponent={{ text: 'เงินฝาก', style: { color: '#fff', fontSize: 16 } }}
          // rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
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
                      <Text>{ itemMoney.led_bal }</Text>                                           
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
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});

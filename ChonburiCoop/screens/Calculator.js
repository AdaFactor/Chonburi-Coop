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
    tab = '&tab=13'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
        this.setState({ 
          ages: result[0].AGES,
          incomemonth: result[0].INCOMEMONTH_OTHER,
          last_period: result[0].LAST_PERIOD,
          member_age: result[0].MEMBER_AGE,
          mnt: result[0].MNT,
          rkeep: result[0].RKEEP_SHAREVALUE,
          salary_amount: result[0].SALARY_AMOUNT,
          sharestk: result[0].SHARESTK_AMT,
          buy_more: result[0].buy_more,
          maxloan: result[0].maxloan,
          member_id: result[0].member_id,
          xloan: result[0].xloan,
        })
        console.log(result)
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
          centerComponent={{ text: 'คำนวนเงินกู้', style: { color: '#fff', fontSize: 16 } }}
          backgroundColor='#248f24'
      />
        <ScrollView style={{ marginBottom: 10 }} >
          <View style={{ margin: 10, borderColor: '#cc0099', borderWidth: 1 }}>
            <View style={{flexDirection: 'row', backgroundColor: '#cc0099',  padding: 5}} >
              <View style={{ width: '50%' }}>
                <Text style={{ color: '#ffffff', fontSize: 18 }}>{ this.state.member_id }</Text>
              </View>
              <View style={{ width: '50%', alignItems: 'flex-end' }}>
                <Text style={{ color: '#ffffff' }}>อายุการเป็นสมาชิก { this.state.member_age }</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', backgroundColor: '#e6e6e6',  padding: 5}}>
              <View style={{ width: '50%' }}>
                <Text style={{ fontWeight: 'bold' }}>เงินเดือน:</Text>
                <Text style={{ fontWeight: 'bold' }}>วิทยฐานะ:</Text>
                <Text style={{ fontWeight: 'bold' }}>งวดหุ้น:</Text>
                <Text style={{ fontWeight: 'bold' }}>มูลค่าหุ้น:</Text>
                <Text style={{ fontWeight: 'bold' }}>ตัวคูณ:</Text>
              </View>

              <View style={{ width: '50%', alignItems: 'flex-end' }}>
                <Text>{ formatMoney(this.state.salary_amount*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                <Text>{ formatMoney(this.state.incomemonth*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                <Text>{ this.state.last_period*1 }</Text>
                <Text>{ formatMoney(this.state.sharestk*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                <Text>{ this.state.xloan }</Text>
              </View>
            </View>
          </View>

          <View style={{ margin: 10, borderColor: '#cc0099', borderWidth: 1 }}>
            <View style={{backgroundColor: '#cc0099',  padding: 5}} >
              <Text style={{ color: '#ffffff', fontSize: 18 }}>สิทธิ์กู้ สามัญ</Text>
            </View>

            <View style={{backgroundColor: '#e6e6e6',  padding: 5}}>
                <Text style={{ fontWeight: 'bold' }}>วงเงินกู้ สามัญ สูงสุด</Text>
                <Text>= ( ( เงินเดือน + วิทยฐานะ ) x ตัวคูณ ) + ค่าหุ้น</Text>
                <Text>= ( ( 
                  {" " + formatMoney(this.state.salary_amount*1, { format: "%v" }) + " " }
                  + { formatMoney(this.state.incomemonth*1, { format: "%v" }) } ) 
                  x { this.state.xloan*1 } ) 
                  + { formatMoney(this.state.sharestk*1, { format: "%v" }) }
                </Text>
                <Text>= { formatMoney(this.state.maxloan*1, { symbol: "บาท",  format: "%v %s" }) }</Text>

                <Text style={{color:'#cc0099'}}>**รวมแล้วไม่เกิน { formatMoney(this.state.maxloan*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                <Text style={{color:'#cc0099'}}>*****ต้องซื้อหุ้นเพิ่ม { formatMoney(this.state.buy_more*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
            </View>
          </View>
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

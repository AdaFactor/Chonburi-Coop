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

const calList = [
  { indenture: 'สว5400086', date_loan: '01/03/2561', limit_loan: '299530.32', balancel: '100000.00', guarantor: [{name: "Kopiko"}, {name: "yoyo"}]},
  { indenture: 'เลขที่สัญญา', date_loan: 'dd/mm/yyyy', limit_loan: '599531.32', balancel: '100000.00', guarantor: [{name: "ชื่อ-นามสกุล"}, {name: "ชื่อ-นามสกุล"}]},
  { indenture: 'เลขที่สัญญา', date_loan: 'dd/mm/yyyy', limit_loan: '499532.32', balancel: '100000.00', guarantor: [{name: "ชื่อ-นามสกุล"}, {name: "ชื่อ-นามสกุล"}]},
  { indenture: 'เลขที่สัญญา', date_loan: 'dd/mm/yyyy', limit_loan: '399533.32', balancel: '100000.00', guarantor: [{name: "ชื่อ-นามสกุล"}]},
  { indenture: 'เลขที่สัญญา', date_loan: 'dd/mm/yyyy', limit_loan: '209534.32', balancel: '100000.00', guarantor: [{name: "ชื่อ-นามสกุล"}]},  
]

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
    ssid = 'ssid=202695'
    tab = '&tab=2'
    url = 'http://www.chtsc.com/check_loan/member_detail.php?' + ssid + tab;
    
    fetch(
        url,
        {
            method: 'get',
            headers: new Headers({
                'Content-Type': 'text/html;charset=windows-874',
                'Accept-Charset': 'windows-874',
                'Content-Language': 'en',
                'Accept-Language': 'th',
                
            }),
        }
    )
    .then((res) => res.text())
    .then((result) => {
        // console.log(result)
        const lines = result.split('\n')
        for (let line = 53; line < lines.length; line++) {
          const newLine = lines[line].trim()
          const td =  newLine.includes('<td')
          const num = newLine.includes('<td valign="top"> ')
          const date = newLine.includes('<td valign="top"><center>')
          const loan = newLine.includes('<td align="right" valign="top">')
          
          if (num == true) { var num_data = newLine.slice(26, -15) }
          if (date == true) { var date_data = newLine.slice(25, -14) }
          if (loan == true) { 
            var loan_data = (newLine.slice(31, -5)).trim()
            this.setState({ 
              loanData: this.state.loanData.concat(loan_data) 
            })
            var dLoan = this.state.loanData
            for (const l = 0; l <  dLoan.length; l++ ) {
              if (l%2==0) {
                var limitLoan = dLoan[l]
              }
              if (l%2==1) {
                var balances = dLoan[l]
                const json = JSON.parse(JSON.stringify({
                  indenture: num_data,
                  date_loan: date_data,
                  limit_loan: limitLoan,
                  balancel: balances,
                }))
                this.setState({ calculator: this.state.calculator.concat(json) })
              }
            }
          }
        }
    })
  }

  render() {
    console.log(this.state.calculator)
    
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
              <Icon 
              name='menu' 
              onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
              color='#fff'
              />
          }
          centerComponent={{ text: 'คำนวนเงินกู้', style: { color: '#fff', fontSize: 16 } }}
          rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#248f24'
      />
        <ScrollView style={{ marginBottom: 10 }} >
            {
              this.state.calculator.map(( itemCal, i ) => (                
                <View style={{ margin: 10, borderColor: '#cc0099', borderWidth: 1 }} key={ i }>
                  <View style={{flexDirection: 'row', backgroundColor: '#cc0099',  padding: 5}} >
                    <View style={{ width: '50%' }}>
                      <Text style={{ color: '#ffffff' }}>{ itemCal.indenture }</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text style={{ color: '#ffffff' }}>{ itemCal.date_loan }</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', backgroundColor: '#e6e6e6',  padding: 5}}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontWeight: 'bold' }}>วงเงินกู้:</Text>
                      <Text style={{ fontWeight: 'bold' }}>คงเหลือ:</Text>
                    </View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text>{ itemCal.limit_loan }</Text>
                      <Text>{ itemCal.balancel }</Text>
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

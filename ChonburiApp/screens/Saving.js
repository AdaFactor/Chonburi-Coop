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
    ssid = 'ssid=202695'
    tab = '&tab=1'
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
        for (let line = 52; line < lines.length; line++) {
            const newLine = lines[line].trim()
            const td =  newLine.includes('<td')
            if (td == true) {
              const n = 52
              if (line == n) { var num = newLine.slice(58, -18) }
              if (line == n + 1) { var type = newLine.slice(4, -5) }
              if (line == n + 2) { var increases = newLine.slice(13, -15) }
              if (line == n + 3) { var name = newLine.slice(4, -5) }
              if (line == n + 4) { 
                var bal = newLine.slice(20, -5) 
                const json = JSON.parse(JSON.stringify({
                  account_name: name,
                  number: num,
                  type_save: type,
                  increase: increases,
                  balance: bal,
                }))
                this.setState({ data_save: this.state.data_save.concat(json) })
              }
              
              // console.log(line + ":" + newLine)
            }
        }
    })
  }

  render() {
    console.log(this.state.data_save)
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
          centerComponent={{ text: 'เงินฝาก', style: { color: '#fff' } }}
          rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#33cc33'
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
                      <Text>{ itemMoney.number }</Text>
                      <Text>{ itemMoney.type_save }</Text>                      
                      <Text>{ itemMoney.increase }</Text>
                      <Text>{ itemMoney.balance }</Text>                                           
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

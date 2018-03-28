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

// const billList = [
//   { bill_number: '100001', date: '01/03/2561', amount_of_money: '29953.32'},
//   { bill_number: '100002', date: '02/03/2561', amount_of_money: '59953.32'},
//   { bill_number: '100003', date: '03/03/2561', amount_of_money: '49953.32'},
//   { bill_number: '100004', date: '04/03/2561', amount_of_money: '39953.32'},
//   { bill_number: '100005', date: '05/03/2561', amount_of_money: '20953.32'},  
// ]

export default class Bill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bill_data: [],
    }
  }
  componentDidMount = () => {
    ssid = 'ssid=202695'
    tab = '&tab=6'
    url = 'http://www.chtsc.com/check_loan/member_detail.php?' + ssid + tab;
    // url = 'https://it-madmonster.blogspot.com/2009/12/web-content-type.html'
    
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
        // console.log("ada")
        // console.log(result)
        const lines = result.split('\n')
        for (let line = 53; line < lines.length; line++) {
            const newLine = lines[line].trim()
            const num = newLine.includes('<td><A')
            const dateS = newLine.includes('<td><center>')
            const amount = newLine.includes('<td  align=')

            if (num == true) { var bill_num = newLine.slice(62, -9) }
            if (dateS == true) { var bill_date = newLine.slice(70, -19) }
            if (amount == true) { 
              var bill_amount = newLine.slice(77, -10) 
              const json = JSON.parse(JSON.stringify({
                bill_number: bill_num,
                date: bill_date,
                amount_of_money: bill_amount
              }))
              this.setState({ bill_data: this.state.bill_data.concat(json) })
            }
        }
    })
  }

  render() {
    console.log(this.state.bill_data)
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
          centerComponent={{ text: 'ใบเสร็จ', style: { color: '#fff' } }}
          rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#33cc33'
        />
        <ScrollView style={{ marginBottom: 10 }}>
            {
              this.state.bill_data.map(( itemBill, i )=>(
                <Card 
                  containerStyle={{ borderColor: '#000066' }} 
                  key={i} 
                  title={'เลขที่ใบเสร็จ: ' + itemBill.bill_number}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.billCard}>
                      <Text>{itemBill.date}</Text>                     
                    </View>
                    <View style={styles.billCard}>
                      <Text>จำนวน {itemBill.amount_of_money} บาท</Text>                      
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

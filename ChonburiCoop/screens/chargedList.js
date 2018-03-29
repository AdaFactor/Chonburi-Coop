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
import { Card, Header, Icon } from 'react-native-elements'

const charged = [
    { list_name: 'หุ้น', period: '411', money: '0.00', interest: '0.00', sum: '3200.00' },
    { list_name: 'ประกัน', period: '0', money: '0.00', interest: '0.00', sum: '00.00' },
    { list_name: 'สส6001308	', period: '10', money: '12000.00', interest: '12792.30', sum: '24792.30' },    
]

export default class chargedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    ssid = 'ssid=202695'
    tab = '&tab=10'
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
    .then(response => response.text())
    .then((responseJson) => {
      // console.log(responseJson)
      const lines = responseJson.split('\n')
      for (let line = 0; line < lines.length; line++) {
        const newLine = lines[line].trim()
        console.log(line + ":" + newLine)
        
        // const newLine = lines[line].trim()
        // const num = newLine.includes('<td><A')
        // const dateS = newLine.includes('<td><center>')
        // const amount = newLine.includes('<td  align=')

        // if (num == true) { var bill_num = newLine.slice(62, -9) }
        // if (dateS == true) { var bill_date = newLine.slice(70, -19) }
        // if (amount == true) { 
        // var bill_amount = newLine.slice(77, -10) 
        // const json = JSON.parse(JSON.stringify({
        //     bill_number: bill_num,
        //     date: bill_date,
        //     amount_of_money: bill_amount
        // }))
        // this.setState({ bill_data: this.state.bill_data.concat(json) })
        // }
      }
    })
    .catch((error) => { console.log(error) })
  }

  render() {
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
          centerComponent={{ text: 'เงินปันผล', style: { color: '#fff' } }}
          rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#248f24'
      />
        <ScrollView style={{ marginBottom: 10, padding: 10 }} >
            {
              charged.map(( itemCharged, i ) => (
                // <Card 
                //     key={i}
                //     title={itemCharged.list_name}
                //     titleStyle={{ color: '#003300'}}
                //     containerStyle={{ borderColor: '#003300' }}
                // >
                //     <View style={{ flexDirection: 'row' }}>
                //         <View style={{ width: '50%' }}>
                //             <Text style={{ fontWeight: 'bold' }}>งวดที่:</Text>
                //             <Text style={{ fontWeight: 'bold' }}>เงินต้น:</Text>
                //             <Text style={{ fontWeight: 'bold' }}>ดอกเบี้ย:</Text>
                //             <Text style={{ fontWeight: 'bold' }}>รวม:</Text>
                //         </View>

                //         <View style={{ width: '50%', alignItems: 'flex-end' }}>
                //             <Text>{ itemCharged.period }</Text>
                //             <Text>{ itemCharged.money }</Text>
                //             <Text>{ itemCharged.interest }</Text>
                //             <Text>{ itemCharged.sum }</Text>
                //         </View>
                //   </View>
                // </Card>
                <View 
                    key={i} 
                    style={styles.listItem}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '70%', alignItems: 'center' }}>
                      <Text style={{ fontSize: 25, color: '#003300', fontWeight: 'bold' }}>
                        { itemCharged.list_name }
                      </Text>
                    </View>
                    <View style={{ width: '30%', alignItems: 'flex-end' }}>
                      <Text style={{ fontWeight: 'bold' }}>{ itemCharged.period }</Text>                       
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ width: '33.33%', alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }}>เงินต้น</Text>
                      <Text style={{ color: '#555' }}>{ itemCharged.money }</Text>
                    </View>
                    <View style={{ width: '33.33%', alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }}>ดอกเบี้ย</Text>
                      <Text style={{ color: '#555' }}>{ itemCharged.interest }</Text>
                    </View>
                    <View style={{ width: '33.33%', alignItems: 'center', justifyContent: 'center' }} >
                      <Text style={{ fontWeight: 'bold' }}>รวม</Text>
                      <Text style={{ color: '#555' }}>{ itemCharged.sum }</Text>
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
    backgroundColor: '#e6ffe6'
  },
  listItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

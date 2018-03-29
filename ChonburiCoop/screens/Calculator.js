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
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?ssid=202695&tab=2'
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
        console.log(result)
        
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

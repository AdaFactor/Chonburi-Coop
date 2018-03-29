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

const debts = [
    { 
      number_compact: 'ฉฉ6000167', 
      date_compact: '07/11/60', 
      loan: '30000.00', 
      balance: '15000.00', 
      guarantor: [
        { registation_number: '000000', name: 'ชื่อ-นามสกุล' },
        { registation_number: '000000', name: 'ชื่อ-นามสกุล' },
        { registation_number: '000000', name: 'ชื่อ-นามสกุล' },       
      ],
      motion: [
        { date: '07/11/61', principle: '2500.00', interest: '2588.00', balance_motion: '4000', notation: '--ชำระหนี้ประจำเดือน'},
        { date: '07/11/61', principle: '2500.00', interest: '2588.00', balance_motion: '4000', notation: '--ชำระหนี้ประจำเดือน'},
        { date: '07/11/61', principle: '2500.00', interest: '2588.00', balance_motion: '4000', notation: '--ชำระหนี้ประจำเดือน'},        
      ] 
    },
    { 
      number_compact: 'ฉฉ6000167', 
      date_compact: '07/11/60', 
      loan: '30000.00', 
      balance: '15000.00', 
      guarantor: [
        { registation_number: '000000', name: 'ชื่อ-นามสกุล' },
        { registation_number: '000000', name: 'ชื่อ-นามสกุล' },
      ],
      motion: [
        { date: '07/11/61', principle: '2500.00', interest: '2588.00', balance_motion: '4000', notation: '--ชำระหนี้ประจำเดือน'},
      ]
    },
]

export default class Debt extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      debt_data: [],
    }
  }
  
  componentDidMount = () => {
    ssid = 'ssid=202695'
    tab = '&tab=12'
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
        for (let line = 0; line < lines.length; line++) {
          console.log(line + ":" + newLine)
          const newLine = lines[line].trim()
          const number = newLine.includes('<td valign="top"><a')
          const dateC = newLine.includes('<td valign="top"><center>')
          const loan_data = newLine.includes('<td align="right" valign="top">')
          if (number == true) { var num_data = (newLine.slice(72, -10)).trim() }
          if (dateC == true) { var dateCom = (newLine.slice(25, -15)).trim() }
          if (loan_data == true) {
            var loanData = (newLine.slice(31, -5)).trim()
            // console.log(line + ":" + newLine)
            const json = JSON.parse(JSON.stringify({
              number_compact: num_data,
              date_compact: dateCom,
              loan: loanData
            }))
            this.setState({ debt_data: this.state.debt_data.concat(json) })
          } 
        }
    })
  }

  render() {
    // console.log(this.state.debt_data)
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
          centerComponent={{ text: 'หนี้สิน', style: { color: '#fff', fontSize: 16 } }}
          rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#33cc33'
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
                        { itemDebts.number_compact }
                      </Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text style={{ fontWeight: 'bold' }}>Date: { itemDebts.date_compact }</Text>                       
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ width: '40%' }}>
                      <Text>วงเงินกู้:</Text>
                      <Text>คงเหลือ:</Text>
                    </View>
                    <View style={{ width: '40%', alignItems: 'flex-end' }}>
                      <Text style={{ color: '#555' }}>{ itemDebts.loan }</Text>
                      <Text style={{ color: '#555' }}>{ itemDebts.balance }</Text>
                    </View>
                    <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }} >
                      <TouchableOpacity 
                        style={{ width: '50%', backgroundColor: '#a69364', borderRadius: 5 }}
                        onPress={() =>
                          {
                            this.props.navigation.push({ component: contentDebt })
                          }
                        }
                      >
                        <Icon name='remove-red-eye' color='#fff' />
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                  {/* <View>
                    {
                      itemDebts.guarantor.map(( itemGuarantor, j ) => {
                        return <Text key={j}>{ itemGuarantor.name }</Text>
                      })
                    }
                  </View> */}
                </View>
              ))
            }
        </ScrollView>
      </View>
    );
  }
}

class contentDebt extends Component {
  render() {
    return (
      <View>
        <Text>a</Text>
      </View>
    )
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

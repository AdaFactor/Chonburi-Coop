import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput
} from 'react-native'
import { Card, Header, Icon } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'

export default class Dividend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guarantor_new: '',
      dividend_data: [],
    }
  }

  componentDidMount = () => {
    ssid = 'ssid=202695'
    tab = '&tab=7'
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
        for (let line = 51; line < lines.length; line++) {
            const newLine = lines[line].trim()
            const td_left =  newLine.includes('<td')
            const td_right = newLine.includes('<td align')
            if (td_left == true) {
              
              if (line == 51) { var dividendP = newLine.slice(30, -5) }
              if (line == 52) { var dividendN = newLine.slice(20, -5) }

              if (line == 55) { var averageP = newLine.slice(18, -5) }
              if (line == 56) { var averageN = newLine.slice(20, -5) }

              if (line == 60) { var souvenirD = newLine.slice(20, -5) }
              if (line == 64) { var feeD = newLine.slice(20, -5) }
              if (line == 72) { var meetingD = newLine.slice(20, -5) }
              if (line == 76) { var teacher_thaiD = newLine.slice(20, -5) }
              if (line == 86) { 
                var balanceD = newLine.slice(23, -9); console.log(balanceD) 
                const json = JSON.parse(JSON.stringify({
                  dividend_percent: dividendP,
                  dividend_money: dividendN,
                  average_percent: averageP,
                  average_money: averageN,
                  souvenir: souvenirD,
                  fee: feeD,
                  meeting: meetingD,
                  teacher_thai: teacher_thaiD,
                  balance: balanceD,
                }))
                this.setState({ dividend_data: this.state.dividend_data.concat(json) })
              }
              // console.log(line + ":" + newLine)
          }
        }
    })
  }

  render() {
    console.log(this.state.dividend_data)
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
          backgroundColor='#33cc33'
      />
        <ScrollView style={{ marginBottom: 10 }} >
            {
              this.state.dividend_data.map(( itemDividend, i ) => (
                <View 
                    key={i} 
                    style={{ padding: 10, borderColor: '#ff6600' }}
                >
                  <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', borderRadius: 5 }}>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>ปันผล ร้อยละ</Text>
                      <ProgressCircle
                          percent={ itemDividend.dividend_percent*1 }
                          radius={50}
                          borderWidth={8}
                          color="#ff944d"
                          shadowColor="#eee"
                          bgColor="#fff"
                      >
                          <Text style={{ fontSize: 18 }}>{ itemDividend.dividend_percent }</Text>
                      </ProgressCircle>
                    </View>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>เฉลี่ยคืน ร้อยละ</Text>                      
                      <ProgressCircle
                        percent={ itemDividend.average_percent*1 }
                        radius={50}
                        borderWidth={8}
                        color="#ff944d"
                        shadowColor="#eee"
                        bgColor="#fff"
                      >
                        <Text style={{ fontSize: 18 }}>{ itemDividend.average_percent }</Text>
                      </ProgressCircle>                    
                    </View>                    
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 10, padding: 10, backgroundColor: '#fff', borderRadius: 5 }}>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>ปันผล จำนวนเงิน</Text>
                      <Text style={{ fontSize: 16  }}>{ itemDividend.dividend_money }</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000'  }}>เฉลี่ยคืน จำนวนเงิน</Text>
                      <Text style={{ fontSize: 16  }}>{ itemDividend.average_money }</Text>                      
                    </View>                    
                  </View>

                  <View 
                    style={{
                      marginTop: 10,
                      padding: 10, 
                      backgroundColor: '#fff', 
                      borderLeftColor: '#C93F0F',
                      borderLeftWidth: 4,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>ค่าของที่ระลึก</Text>
                    <Text style={{ fontSize: 16 }}>{ itemDividend.souvenir }</Text>                    
                  </View>
                  
                  <View 
                    style={{ 
                      padding: 10, 
                      backgroundColor: '#fff', 
                      borderLeftColor: '#E88E34',
                      borderLeftWidth: 4,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold',  fontSize: 16, color: '#000' }}>ค่าธรรมเนียมโอน</Text>
                    <Text style={{ fontSize: 16 }}>{ itemDividend.fee }</Text>                    
                  </View>

                  <View 
                    style={{ 
                      padding: 10, 
                      backgroundColor: '#fff', 
                      borderLeftColor: '#C93F0F',
                      borderLeftWidth: 4,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>หักชุมนุม</Text>
                    <Text style={{ fontSize: 16 }}>{ itemDividend.meeting }</Text>                    
                  </View>

                  <View 
                    style={{ 
                      padding: 10, 
                      backgroundColor: '#fff', 
                      borderLeftColor: '#E88E34',
                      borderLeftWidth: 4,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold',  fontSize: 16, color: '#000' }}>หักครูไทย</Text>
                    <Text style={{ fontSize: 16 }}>{ itemDividend.teacher_thai }</Text>                    
                  </View>

                  <View 
                    style={{ 
                      flexDirection: 'row', 
                      padding: 10, 
                      backgroundColor: '#fff', 
                    }}
                  >
                    <View style={{ width: '50%', alignItems: 'center', }}>
                        <Text style={{ fontWeight: 'bold', color: '#000' }}>คงเหลือ:</Text>
                    </View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                        <Text>{ itemDividend.balance }</Text>
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
    backgroundColor: '#fff0e6'
  },
});

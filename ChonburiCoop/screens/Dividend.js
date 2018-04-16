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
import formatMoney from 'accounting-js/lib/formatMoney.js'

export default class Dividend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guarantor_new: '',
      dividend_data: [],
    }
  }

  componentDidMount = () => {
    ssid = 'ssid=' + this.props.navigation.state.params.id_user
    tab = '&tab=7'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab;
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
      this.setState({ dividend_data: result })
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
          centerComponent={{ text: 'เงินปันผล', style: { color: '#fff', fontSize: 16 } }}
          backgroundColor='#248f24'
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
                          percent={5.47}
                          radius={50}
                          borderWidth={8}
                          color="#ff944d"
                          shadowColor="#eee"
                          bgColor="#fff"
                      >
                          <Text style={{ fontSize: 18 }}>5.47</Text>
                      </ProgressCircle>
                    </View>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>เฉลี่ยคืน ร้อยละ</Text>                      
                      <ProgressCircle
                        percent={12.0}
                        radius={50}
                        borderWidth={8}
                        color="#ff944d"
                        shadowColor="#eee"
                        bgColor="#fff"
                      >
                        <Text style={{ fontSize: 18 }}>12.0</Text>
                      </ProgressCircle>                    
                    </View>                    
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 10, padding: 10, backgroundColor: '#fff', borderRadius: 5 }}>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>ปันผล จำนวนเงิน</Text>
                      <Text style={{ fontSize: 16  }}>{ formatMoney(itemDividend.share*1, { symbol: "บาท",  format: "%v %s" })  }</Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000'  }}>เฉลี่ยคืน จำนวนเงิน</Text>
                      <Text style={{ fontSize: 16  }}>{ formatMoney(itemDividend.avegr*1, { symbol: "บาท",  format: "%v %s" }) }</Text>                      
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
                    <Text style={{ fontSize: 16 }}>{ formatMoney(itemDividend.gif*1, { symbol: "บาท",  format: "%v %s" }) }</Text>                    
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
                    <Text style={{ fontSize: 16 }}>{ formatMoney(itemDividend.free*1, { symbol: "บาท",  format: "%v %s" })}</Text>                    
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
                    <Text style={{ fontSize: 16 }}>{ formatMoney(itemDividend.kt*1, { symbol: "บาท",  format: "%v %s" })}</Text>                    
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
                    <Text style={{ fontSize: 16 }}>{ formatMoney(itemDividend.cm*1, { symbol: "บาท",  format: "%v %s" })}</Text>                    
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
                        <Text>{ formatMoney(itemDividend.bal*1, { symbol: "บาท",  format: "%v %s" })}</Text>
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

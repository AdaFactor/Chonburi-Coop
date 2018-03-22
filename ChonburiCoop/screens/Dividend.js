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

const dividend = [{
    dividend_percent: 5.41,
    dividend_money: '45325.20',
    average_percent: 12.0,
    average_money: '30666.50',
    souvenir: '600',
    fee: '10',
    meeting: '4820.00',
    teacher_thai: '4840.00',
    balance: '66941.70'
}]

export default class Dividend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guarantor_new: ''
    }
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
          // backgroundColor='#33cc33'
      />
        <ScrollView style={{ marginBottom: 10 }} >
            {
              dividend.map(( itemDividend, i ) => (
                <View 
                    key={i} 
                    style={{ padding: 10, borderColor: '#ff6600' }}
                >
                  <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', borderRadius: 5 }}>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>ปันผล ร้อยละ</Text>
                      <ProgressCircle
                          percent={ itemDividend.dividend_percent }
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
                        percent={ itemDividend.average_percent }
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

                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontWeight: 'bold' }}>คงเหลือ:</Text>
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

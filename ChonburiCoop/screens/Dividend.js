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

const dividend = [{
    dividend_percent: '5.41',
    dividend_money: '45325.20',
    average_percent: '12.0',
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
          backgroundColor='#33cc33'
      />
        <ScrollView style={{ marginBottom: 10 }} >
            {
              dividend.map(( itemDividend, i ) => (
                <Card 
                    key={i} 
                    containerStyle={{ borderColor: '#ff6600' }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontWeight: 'bold' }}>ปันผล ร้อยละ:</Text>
                            <Text style={{ fontWeight: 'bold' }}>ปันผล จำนวนเงิน:</Text>
                            <Text style={{ fontWeight: 'bold' }}>เฉลี่ยคืน ร้อยละ:</Text>
                            <Text style={{ fontWeight: 'bold' }}>เฉลี่ยคืน จำนวนเงิน:</Text>
                            <Text style={{ fontWeight: 'bold' }}>ค่าของที่ระลึก:</Text>
                            <Text style={{ fontWeight: 'bold' }}>ค่าธรรมเนียมโอน:</Text>
                            <Text style={{ fontWeight: 'bold' }}>หักชุมนุม:</Text>
                            <Text style={{ fontWeight: 'bold' }}>หักครูไทย:</Text>
                            <Text style={{ fontWeight: 'bold' }}>คงเหลือ:</Text>
                        </View>

                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <Text>{ itemDividend.dividend_percent }</Text>
                            <Text>{ itemDividend.dividend_money }</Text>
                            <Text>{ itemDividend.average_percent }</Text>
                            <Text>{ itemDividend.average_money }</Text>
                            <Text>{ itemDividend.souvenir }</Text>
                            <Text>{ itemDividend.fee }</Text>
                            <Text>{ itemDividend.meeting }</Text>
                            <Text>{ itemDividend.teacher_thai }</Text>
                            <Text>{ itemDividend.balance }</Text>
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
    backgroundColor: '#fff0e6'
  },
});

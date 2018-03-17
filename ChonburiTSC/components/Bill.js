import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView 
} from 'react-native'
import { Input, Button, Card } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import BottomNav from './BottomNav'

const billList = [
  { bill_number: '100001', date: '01/03/2561', amount_of_money: '29953.32'},
  { bill_number: '100002', date: '02/03/2561', amount_of_money: '59953.32'},
  { bill_number: '100003', date: '03/03/2561', amount_of_money: '49953.32'},
  { bill_number: '100004', date: '04/03/2561', amount_of_money: '39953.32'},
  { bill_number: '100005', date: '05/03/2561', amount_of_money: '20953.32'},  
]

export default class Bill extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginBottom: 70 }}>
            {
              billList.map(( itemBill, i )=>(
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

        <BottomNav />
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

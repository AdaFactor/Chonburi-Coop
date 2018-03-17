import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { Input, Button, List, ListItem, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'

import BottomNav from './BottomNav'

const list = [
    {
      name: 'นางสาวดาราวรรณ อุดมรัตน์',
      avatar_url: 'https://png.icons8.com/office/30/ffffff/circled-user-male-skin-type-3.png',
      indenture: 'สส5602854',
      date_loan: 'dd/mm/yyyy',
      principle: '100000.00'
    },
    {
      name: 'ชื่อ-นามสกุล',
      avatar_url: 'https://png.icons8.com/office/30/ffffff/circled-user-male-skin-type-3.png',
      indenture: 'เลขที่สัญญาเงินกู้',
      date_loan: 'dd/mm/yyyy',
      principle: '200000.00' 
    },
    {
      name: 'ชื่อ-นามสกุล',
      avatar_url: 'https://png.icons8.com/office/30/ffffff/circled-user-male-skin-type-3.png',
      indenture: 'เลขที่สัญญาเงินกู้',
      date_loan: 'dd/mm/yyyy',
      principle: '300000.00' 
    },
    {
      name: 'ชื่อ-นามสกุล',
      avatar_url: 'https://png.icons8.com/office/30/ffffff/circled-user-male-skin-type-3.png',
      indenture: 'เลขที่สัญญาเงินกู้',
      date_loan: 'dd/mm/yyyy',
      principle: '400000.00' 
    },
    {
      name: 'ชื่อ-นามสกุล',
      avatar_url: 'https://png.icons8.com/office/30/ffffff/circled-user-male-skin-type-3.png',
      indenture: 'เลขที่สัญญาเงินกู้',
      date_loan: 'dd/mm/yyyy',
      principle: '500000.00' 
    }
]

export default class Guarantee extends React.Component {

  // descriptionInfo(data) {
    
  // }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f2ec' }}>
        <ScrollView>
          <View style={{ marginTop: 0, marginBottom: 57 }}>
            {
              list.map(( item, i ) => (
                <View key={i} style={{backgroundColor: (i%2 == 0) ? '#996633' : '#ffffff',  padding: 10}}>
                  <View style={styles.listHead}>
                    <Text 
                      style={{ 
                        color: (i%2 == 0) ? '#ffffff' : '#996633', 
                        fontWeight: 'bold' 
                      }}
                    >{ item.name }</Text>                      
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%', marginTop: 5 }} >
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>สัญญาเงินกู้</Text>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>วันที่กู้</Text>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>เงินต้นคงเหลือ</Text>
                    </View>

                    <View style={{ width: '50%', marginTop: 5, alignItems: 'flex-end' }}>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>{ item.indenture }</Text>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>{ item.date_loan }</Text>
                      <Text style={{ color: (i%2 == 0) ? '#ffffff' : '#996633' }}>{ item.principle }</Text>
                    </View>
                    
                  </View>
                </View>
              ))
            }
          </View>
        </ScrollView>

        <BottomNav />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  listHead: {
    alignItems: 'center',
  }
})

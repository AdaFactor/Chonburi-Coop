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
    { number_compact: 'ฉฉ6000167', date_compact: '07/11/60', loan: '30000.00', balance: '15000.00', guarantor: '' },
]

export default class Debt extends React.Component {
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
          centerComponent={{ text: 'หนี้สิน', style: { color: '#fff' } }}
          rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#33cc33'
      />
        <ScrollView style={{ marginBottom: 10 }} >
            {
              debts.map(( itemDebts, i ) => (
                <Card 
                    key={i} 
                    containerStyle={{ borderColor: '#2f0800' }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontWeight: 'bold' }}>เลขที่สัญญา:</Text>
                            <Text style={{ fontWeight: 'bold' }}>วันที่กู้:</Text>
                            <Text style={{ fontWeight: 'bold' }}>วงเงินกู้:</Text>
                            <Text style={{ fontWeight: 'bold' }}>คงเหลือ:</Text>
                            <Text style={{ fontWeight: 'bold' }}>ผู้ค้ำประกัน:</Text>
                        </View>

                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <Text>{ itemDebts.number_compact }</Text>
                            <Text>{ itemDebts.date_compact }</Text>
                            <Text>{ itemDebts.loan }</Text>
                            <Text>{ itemDebts.balance }</Text>
                            <Text>{ itemDebts.guarantor }</Text>
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
    backgroundColor: '#a08d5c'
  },
});

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
              charged.map(( itemCharged, i ) => (
                <Card 
                    key={i}
                    title={itemCharged.list_name}
                    titleStyle={{ color: '#003300'}}
                    containerStyle={{ borderColor: '#003300' }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontWeight: 'bold' }}>งวดที่:</Text>
                            <Text style={{ fontWeight: 'bold' }}>เงินต้น:</Text>
                            <Text style={{ fontWeight: 'bold' }}>ดอกเบี้ย:</Text>
                            <Text style={{ fontWeight: 'bold' }}>รวม:</Text>
                        </View>

                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <Text>{ itemCharged.period }</Text>
                            <Text>{ itemCharged.money }</Text>
                            <Text>{ itemCharged.interest }</Text>
                            <Text>{ itemCharged.sum }</Text>
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
    backgroundColor: '#e6ffe6'
  },
});

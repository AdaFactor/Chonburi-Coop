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
  constructor(props) {
    super(props)
    this.state = {
      list_data: [],
    }
  }

  componentDidMount() {
    ssid = 'ssid=' + this.props.navigation.state.params.id_user
    tab = '&tab=10'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab;
    fetch(
      url,
      {
          method: 'get',
      }
    )
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({ list_data: responseJson })
    })
    .catch((error) => { console.log(error) })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          
          centerComponent={{ text: 'รายการเรียกเก็บ', style: { color: '#fff', fontSize: 16 } }}
          // rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#248f24'
      />
        <ScrollView style={{ marginBottom: 10, padding: 10 }} >
            {
              this.state.list_data.map(( itemCharged, i ) => (
                <View 
                    key={i} 
                    style={styles.listItem}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '70%', alignItems: 'center' }}>
                      <Text style={{ fontSize: 25, color: '#003300', fontWeight: 'bold' }}>
                        { itemCharged.detail }
                      </Text>
                    </View>
                    <View style={{ width: '30%', alignItems: 'flex-end' }}>
                      <Text style={{ fontWeight: 'bold' }}>งวดที่: { itemCharged.seq_no }</Text>                       
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ width: '33.33%', alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }}>เงินต้น</Text>
                      <Text style={{ color: '#555' }}>{ itemCharged.install_amt }</Text>
                    </View>
                    <View style={{ width: '33.33%', alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }}>ดอกเบี้ย</Text>
                      <Text style={{ color: '#555' }}>{ itemCharged.int_amt }</Text>
                    </View>
                    <View style={{ width: '33.33%', alignItems: 'center', justifyContent: 'center' }} >
                      <Text style={{ fontWeight: 'bold' }}>รวม</Text>
                      <Text style={{ color: '#555' }}>{ itemCharged.printciple_bal }</Text>
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
    backgroundColor: '#e6ffe6'
  },
  listItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

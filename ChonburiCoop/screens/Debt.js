import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal 
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
      modalVisible: false,
    }
  }
  
  componentDidMount = () => {
    ssid = 'ssid=' + this.props.navigation.state.params.id_user
    tab = '&tab=12'
    url = 'http://www.chtsc.com/check_loan/get_data/php2json.php?' + ssid + tab;
    
    fetch(
        url,
        {
            method: 'get',
        }
    )
    .then((res) => res.json())
    .then((result) => {
        this.setState({ debt_data: result })
    })
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    let name = this.props.navigation.state.params.memberName
    
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'หนี้สิน', style: { color: '#fff', fontSize: 16 } }}
          rightComponent={
            <Icon 
                name='email' 
                onPress={() => {this.props.navigation.navigate('NewsScreen', {id_user: this.props.navigation.state.params.id_user, memberName: name })}}
                color='#fff'
            />
          }
          // statusBarProps={{ translucent: true }}
          backgroundColor='#248f24'
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
                        { itemDebts.loan_id }
                      </Text>
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end' }}>
                      <Text style={{ fontWeight: 'bold' }}>Date: { itemDebts.loan_date }</Text>                       
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <View style={{ width: '20%' }}>
                      <Text>วงเงินกู้:</Text>
                      <Text>คงเหลือ:</Text>
                    </View>
                    <View style={{ width: '20%', alignItems: 'flex-end' }}>
                      <Text style={{ color: '#555' }}>{ itemDebts.loan_amt }</Text>
                      <Text style={{ color: '#555' }}>{ itemDebts.loan_bal }</Text>
                    </View>
                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center' }} >
                      {/* <TouchableOpacity 
                        style={{ width: '50%', backgroundColor: '#a69364', borderRadius: 5 }}
                        // onPress={}
                        onPress={() => {
                          this.setModalVisible(true);
                        }}
                      >
                        <Icon name='remove-red-eye' color='#fff' />
                      </TouchableOpacity>

                      <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                          alert('Modal has been closed.');
                        }}
                      >
                        <View style={{marginTop: 22}}> */}
                            {
                              itemDebts.guarantor.map((g, ind) => (
                                <View key={ind}>
                                  <Text>{ g.member_name }</Text>
                                </View>
                              ))
                            }

                            {/* <TouchableOpacity
                              onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                              }}>
                              <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                      </Modal> */}
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

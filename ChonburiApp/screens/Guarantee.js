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
import { Input, Button, List, ListItem, Card, Header, Icon } from 'react-native-elements';

export default class Guarantee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guarantee_data: [],
    }
  }

  componentDidMount = () => {
    ssid = 'ssid=202695'
    tab = '&tab=4'
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
        for (let line = 52; line < lines.length; line++) {
            const newLine = lines[line].trim()
            const td =  newLine.includes('<td>')
            const principles = newLine.includes('<td align')
            if (td == true) {
              // const n = 52
              if (line%2 == 0) { var nameG = newLine.slice(4, -5) }
              //   var bal = newLine.slice(20, -5) 
              //   const json = JSON.parse(JSON.stringify({
              //     account_name: name,
              //     number: num,
              //     type_save: type,
              //     increase: increases,
              //     balance: bal,
              //   }))
              //   this.setState({ data_save: this.state.data_save.concat(json) })
              // }
              
              // console.log(line + ":" + newLine)
          }
          if (principles == true) {
            console.log(newLine)
          }
        }
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f2ec' }}>
        <Header
          leftComponent={
              <Icon 
              name='menu' 
              onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
              color='#fff'
              />
          }
          centerComponent={{ text: 'การค้ำประกัน', style: { color: '#fff' } }}
          rightComponent={{ icon: 'email', color: '#fff' }}
          // statusBarProps={{ translucent: true }}
          backgroundColor='#33cc33'
        />
        <ScrollView>
          <View style={{ marginTop: 0, marginBottom: 10 }}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listHead: {
    alignItems: 'center',
  }
})

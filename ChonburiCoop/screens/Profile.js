import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native'
import { Input, Button, Card, ButtonGroup, Header, Icon } from 'react-native-elements'

export default class Profile extends React.Component {
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
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'email', color: '#fff' }}
                    statusBarProps={{ translucent: true }}
                    backgroundColor='#33cc33'
                />
                <ScrollView style={{ marginBottom: 10 }}>
                    <Card>
                        <View style={styles.profileCard}>
                            <Image source={require('../static/images/profile.png')} style={{width: 150, height: 150}} />
                            <Text style={{color: '#006666', fontWeight: 'bold', fontSize: 20}}>ชื่อ นามสกุล</Text> 
                        </View>              
                    </Card>
                    
                    <Card style={{height: 80}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>เลขทะเบียน</Text>
                                <Text style={{color: '#006666'}}>xxxxxx</Text>                    
                            </View>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>สังกัด</Text>
                                <Text style={{color: '#006666'}}>-</Text>                    
                            </View>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>วันที่เป็นสมาชิก</Text>
                                <Text style={{color: '#006666'}}>-</Text>                    
                            </View>
                        </View>
                    </Card>

                    <Card style={{height: 80}}>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>วันเกิด: dd/mm/yyyy</Text>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>โทรศัพท์: 08xxxxxxxx</Text>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>ที่อยู่: 16/3 หมู่บ้านสหกรณ์ออมทรัพย์ ม.1 ต.ในเมือง อ.เมือง จ.ชลบุรี 20140</Text>
                    </Card>

                    <View style={{margin: 15, flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => Alert.alert('มูลค่าหุ้น', 'จำนวน 700,000 บาท')}
                        >
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>มูลค่าหุ้น</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => Alert.alert('หุ้นรายเดือน', 'จำนวน 4,000 บาท')}                            
                        >
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>หุ้นรายเดือน</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6ffff'
    },
    profileCard: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataMember: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.33%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006666',
        width: '50%',
        height: 40,
        alignItems: 'center',
    }
});

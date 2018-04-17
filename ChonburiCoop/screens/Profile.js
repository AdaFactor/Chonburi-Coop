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
import formatMoney from 'accounting-js/lib/formatMoney.js'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            member_data: [],
        }
    }

    componentDidMount = () => {
        fetch( 'http://www.chtsc.com/check_loan/get_data/php2json.php?ssid=' + this.props.navigation.state.params.id_user + '&tab=3', { 
            method: 'GET',
            
        })
        .then(res => res.json())
        .then((result) => {
            let address = result[0].address
            let rkeep = result[0].rkeep
            this.setState({ 
                member_id: result[0].member_id,
                member_name: result[0].member_name,
                share_v: result[0].share_v,
                identity_card: result[0].identity_card,
                address: address.replace('<br>', ''),
                mobile: result[0].mobile,
                member_date: result[0].member_date,
                birth_date: result[0].birth_date,
                rkeep: rkeep.replace(',', ''),
                apply_date: result[0].apply_date
            })                
        })
        .catch((error) => { console.log(error) })
    }

    render() {
        let name = this.props.navigation.state.params.memberName
        
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={() => {this.props.navigation.navigate('HomeScreen',  {id_user: this.props.navigation.state.params.id_user })}}
                        >
                            <Icon 
                                name='home' 
                                color='#fff'
                            />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'สมาชิก', style: { color: '#fff', fontSize: 16 } }}
                    backgroundColor='#248f24'
                />
                <ScrollView style={{ marginBottom: 10 }}>
                    <Card style={{flexDirection: 'row', height: 80}}>
                        <View style={styles.profileCard}>
                            <Text style={{color: '#006666', fontWeight: 'bold', fontSize: 20}}>
                                { this.state.member_name }
                            </Text> 
                        </View> 
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>เลขทะเบียน</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.member_id}
                                </Text>                    
                            </View>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>สังกัด</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.route}
                                </Text>                    
                            </View>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>วันที่เป็นสมาชิก</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.member_date}
                                </Text>                    
                            </View>
                        </View>
                    </Card>

                    
                    <View style={{ marginLeft: 15, marginRight: 15 }}>
                        <View 
                            style={{
                                marginTop: 10,
                                padding: 10, 
                                backgroundColor: '#fff', 
                                borderLeftColor: '#003333',
                                borderLeftWidth: 4,
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>วันเกิด</Text>
                            <Text style={{ fontSize: 16 }}>{ this.state.birth_date }</Text>                    
                        </View>

                        <View 
                            style={{ 
                            padding: 10, 
                            backgroundColor: '#fff', 
                            borderLeftColor: '#00cccc',
                            borderLeftWidth: 4,
                            }}
                        >
                            <Text style={{ fontWeight: 'bold',  fontSize: 16, color: '#000' }}>โทรศัพท์</Text>
                            <Text style={{ fontSize: 16 }}>{ this.state.mobile }</Text>                    
                        </View>

                        <View 
                            style={{ 
                                padding: 10, 
                                backgroundColor: '#fff', 
                                borderLeftColor: '#003333',
                                borderLeftWidth: 4,
                            }}
                        >
                            <Text style={{ fontWeight: 'bold',  fontSize: 16, color: '#000' }}>ที่อยู่</Text>
                            <Text style={{ fontSize: 16 }}>{ this.state.address }</Text>                    
                        </View>
                    </View>
                    

                    <View style={{margin: 15, marginBottom: 0, flexDirection: 'row'}}>
                        <View style={styles.title} >   
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>มูลค่าหุ้น</Text>
                        </View>
                        <View style={styles.content} >
                            <Text style={{color: '#006666'}}>{ formatMoney(this.state.share_v*10, { symbol: "บาท",  format: "%v %s" }) }</Text>
                        </View>
                    </View>
                    
                    <View style={{margin: 15, marginTop: 0, flexDirection: 'row'}}>
                        <View style={styles.title} >   
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>หุ้นรายเดือน</Text>
                        </View>
                        <View style={styles.content} >
                            <Text style={{color: '#006666'}}>{ formatMoney(this.state.rkeep*1, { symbol: "บาท",  format: "%v %s" }) }</Text>
                        </View>
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
        marginBottom: 15,
    },
    dataMember: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.33%',
    },
    title: {
        backgroundColor: '#006666',
        width: '40%',
        padding: 10,
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#006666',
        borderWidth: 1,
        width: '60%',
        padding: 10, 
    } 
});

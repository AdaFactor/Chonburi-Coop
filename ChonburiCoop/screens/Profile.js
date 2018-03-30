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

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            member_data: [],
        }
    }

    componentDidMount = () => {
        //this.props.navigation.state.params.id_user
        fetch( 'http://www.chtsc.com/check_loan/get_data/php2json.php?ssid=' + this.props.navigation.state.params.id_user + '&tab=3', { 
            method: 'GET',
            
        })
        .then(res => res.json())
        .then((result) => {
            for (let index = 0; index < result.length; index++) {
                this.setState({ 
                    member_id: result[index].member_id,
                    member_name: result[index].member_name,
                    share_v: result[index].share_v,
                    identity_card: result[index].identity_card,
                    address: result[index].address,
                    mobile: result[index].mobile,
                    member_date: result[index].member_date,
                    birth_date: result[index].birth_date,
                    rkeep: result[index].rkeep,
                    apply_date: result[index].apply_date
                })                
            }
        })
        .catch((error) => { console.log(error) })
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
                    centerComponent={{ text: 'สมาชิก', style: { color: '#fff', fontSize: 16 } }}
                    rightComponent={
                        <Icon 
                            name='email' 
                            onPress={() => {this.props.navigation.navigate('NewsScreen', {id_user: this.props.navigation.state.params.id_user})}}
                            color='#fff'
                        />
                    }
                    // statusBarProps={{ translucent: true }}
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
                    

                    <View style={{margin: 15, flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => Alert.alert('มูลค่าหุ้น', 'จำนวน ' + (this.state.share_v)*10 + ' บาท')}
                        >
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>มูลค่าหุ้น</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => Alert.alert('หุ้นรายเดือน', 'จำนวน ' + this.state.rkeep + ' บาท')}                            
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
        marginBottom: 15,
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

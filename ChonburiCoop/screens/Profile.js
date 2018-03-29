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
            data: [],
            name: '',
            id_user: '',
            affiliation: '',
            date_to_member: '',
            birthday: '',
            tel: '',
            address: '',
            share: '',
            share_mounth: ''
        }
    }

    componentDidMount() {
        fetch('http://www.chtsc.com/check_loan/get_data/php2json.php?ssid=202695&tab=03', {
            headers: new Headers({
                'Content-Type': 'text/html; charset=iso-8859-1',
                'Content-Language': 'th',
            })
        })
        .then(response => {
            console.log(response._bodyText);
            response.json();
          })
        .then((responseJson) => {
            console.log(responseJson)
            
        })
        .catch((error) => { console.log(error) })
    }

    // componentDidMount = () => {
    //     fetch( 'http://www.chtsc.com/check_loan/member_detail.php?ssid='+ this.props.navigation.state.params.id_user +'&tab=3', { 
    //         method: 'GET',
    //         headers: new Headers({
    //             'Content-Type': 'text/html;charset=UTF-8'
    //         })
    //     })
    //     .then(res => res.text())
    //     .then((result) => {
    //         const lines = result.split('\n')
    //         for (let line = 0; line < lines.length; line++) {
    //             const newLine = lines[line].trim()
    //             const td = newLine.includes('<td')
    //             if (td == true) {
    //                 // console.log(newLine.length)
    //                 // console.log(line + ":" + newLine)
    //                 if ( line == 46 ) {
    //                     const nameNew = newLine.slice(33, -23)
    //                     this.setState({ name: nameNew })
    //                 } 
    //                 else if ( line == 51 ) {
    //                     const idNew = newLine.slice(13, -14)
    //                     this.setState({ id_user: idNew })
    //                 } 
    //                 else if ( line == 56 ) {
    //                     const affiliationNew = newLine.slice(13, -14)
    //                     this.setState({ affiliation: affiliationNew })
    //                 }
    //                 else if ( line == 76 ) {
    //                     const dateNew = newLine.slice(12, -14)
    //                     this.setState({ date_to_member: dateNew })
    //                 }
    //                 else if ( line == 80 ) {
    //                     const birthdayNew = newLine.slice(12, -15)
    //                     this.setState({ birthday: birthdayNew })
    //                 }
    //                 else if ( line == 64 ) {
    //                     const telNew = newLine.slice(4, -5)
    //                     this.setState({ tel: telNew })
    //                 }
    //                 else if ( line == 60 ) {
    //                     const addressNew = newLine.slice(4, -5)
    //                     this.setState({ address: addressNew })
    //                 }
    //                 else if ( line == 68 ) {
    //                     const shareNew = newLine.slice(19, -5)
    //                     this.setState({ share: shareNew })
    //                 }
    //                 else if ( line == 72 ) {
    //                     const share_mounthNew = newLine.slice(19, -5)
    //                     this.setState({ share_mounth: share_mounthNew })
    //                 }
    //             }
    //         }
            
    //     })
    //     .catch((error) => { console.log(error) })
    // }

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
                    centerComponent={{ text: 'สมาชิก', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'email', color: '#fff' }}
                    // statusBarProps={{ translucent: true }}
                    backgroundColor='#248f24'
                />
                <ScrollView style={{ marginBottom: 10 }}>
                    <Card>
                        <View style={styles.profileCard}>
                            <Image source={require('../static/images/profile.png')} style={{width: 150, height: 150}} />
                            <Text style={{color: '#006666', fontWeight: 'bold', fontSize: 20}}>
                                {this.state.name}
                            </Text> 
                        </View>              
                    </Card>
                    
                    <Card style={{height: 80}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>เลขทะเบียน</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.id_user}
                                </Text>                    
                            </View>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>สังกัด</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.affiliation}
                                </Text>                    
                            </View>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>วันที่เป็นสมาชิก</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.date_to_member}
                                </Text>                    
                            </View>
                        </View>
                    </Card>

                    <Card style={{height: 80}}>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>วันเกิด: {this.state.birthday}</Text>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>โทรศัพท์: {this.state.tel}</Text>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>ที่อยู่: {this.state.address}</Text>
                    </Card>

                    <View style={{margin: 15, flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => Alert.alert('มูลค่าหุ้น', 'จำนวน ' + this.state.share)}
                        >
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>มูลค่าหุ้น</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => Alert.alert('หุ้นรายเดือน', 'จำนวน ' + this.state.share_mounth)}                            
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

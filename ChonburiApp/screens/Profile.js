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
import utf8 from 'utf8'

var binaryToBase64 = require('binaryToBase64')

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id_line: [],
        }
    }

    componentDidMount = () => {
        fetch( 'http://www.chtsc.com/check_loan/member_detail.php?ssid='+ this.props.navigation.state.params.id_user +'&tab=3', { 
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded;'
            })
        })
        .then(res => res.text())
        .then((result) => {
            // var bytes = utf8.encode(result)
            // var encoded = binaryToBase64(bytes)
            const lines = result.split('\n')
            for (let line = 0; line < lines.length; line++) {
                // console.log(line +": "+ lines[line].trim())
                const newLine = lines[line].trim()
                const td = newLine.includes('<td')
                // const tdLine = lines[line].trim()
                // const tdData = this.state.data.concat(tdLine)
                // this.setState({ data: tdData })
                if (td == true) {
                    // console.log(newLine.length)
                    // console.log(line + ":" + newLine)
                    if (line == 46) {
                        const name = newLine.slice(33, -22)
                        console.log(name)
                    }
                }
                
                // console.log(this.state.data)
            }
            // this.setState({ id_line: JSON.stringify(line), data: JSON.stringify(tdLine) })
            
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
                    centerComponent={{ text: 'สมาชิก', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'email', color: '#fff' }}
                    // statusBarProps={{ translucent: true }}
                    backgroundColor='#33cc33'
                />
                <ScrollView style={{ marginBottom: 10 }}>
                    <Card>
                        <View style={styles.profileCard}>
                            <Image source={require('../static/images/profile.png')} style={{width: 150, height: 150}} />
                            <Text style={{color: '#006666', fontWeight: 'bold', fontSize: 20}}>
                                {this.props.name}
                            </Text> 
                        </View>              
                    </Card>
                    
                    <Card style={{height: 80}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>เลขทะเบียน</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.data[15]}
                                </Text>                    
                            </View>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>สังกัด</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.data[17]}
                                </Text>                    
                            </View>
                            <View style={styles.dataMember}>
                                <Text style={{color: '#006666', fontWeight: 'bold'}}>วันที่เป็นสมาชิก</Text>
                                <Text style={{color: '#006666'}}>
                                    {this.state.data[27]}
                                </Text>                    
                            </View>
                        </View>
                    </Card>

                    <Card style={{height: 80}}>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>วันเกิด: {this.state.data[29]}</Text>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>โทรศัพท์: {this.state.data[19]}</Text>
                        <Text style={{color: '#006666', fontWeight: 'bold'}}>ที่อยู่: {this.state.data[21]}</Text>
                    </Card>

                    <View style={{margin: 15, flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => Alert.alert('มูลค่าหุ้น', 'จำนวน ' + this.state.data[23])}
                        >
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>มูลค่าหุ้น</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => Alert.alert('หุ้นรายเดือน', 'จำนวน ' + this.state.data[25])}                            
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

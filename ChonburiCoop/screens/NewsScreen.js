import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    Linking
} from 'react-native'
import { Header, Icon } from 'react-native-elements'

export default class NewsScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            data_news:[]
        }
    }
    componentDidMount = () => {
        fetch( 'http://www.chtsc.com/index.php/component/content/article/14-infor/109-info-13', { method: 'GET' })
        .then(res => res.text())
        .then((result) => { 
            // console.log(result)
            const newResult = result.split('\n')
            for (let index = 161; index < newResult.length; index++) {
                var year = new Date().getFullYear()
                const link = newResult[index].includes('<td style="text-align: left;"><a href="/images/256')            
                const name = newResult[index].includes('<span style="color: #000000; text-decoration: underline;"></span')
                if (link == true && name == true) {
                    const json = JSON.parse(JSON.stringify({
                        news_date: newResult[index].trim().slice(40, 66),
                        news_name: newResult[index].trim().slice(245, -32)
                    }))
                    this.setState({ data_news: this.state.data_news.concat(json) })
                }
            }
            
        })
        .catch((error) => { console.log(error) })
    }

    render(){
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{
                        icon: 'home' ,
                        onPress: () => {this.props.navigation.navigate('HomeScreen', 
                        {
                            id_user: this.props.navigation.state.params.id_user,
                            memberName: this.props.navigation.state.params.memberName
                        })}
                    }}
                    centerComponent={{ text: 'ข่าวประชาสัมพันธ์', style: { fontSize: 16, color:'#fff' } }}
                    // statusBarProps={{ translucent: true }}
                    backgroundColor='#248f24'                    
                />
                <ScrollView>
                    {
                        this.state.data_news.map((item, i) => (
                            <View style={styles.contentNews} key={i}>
                                <Text 
                                    onPress={() => Linking.openURL('http://www.chtsc.com' + item.news_date) 
                                    }
                                >{ item.news_name }</Text>
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
        backgroundColor: '#e9e9ee'
    },
    contentNews: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff'
    },
    headNews: {
        fontWeight: 'bold',
        fontSize: 20
    }
})
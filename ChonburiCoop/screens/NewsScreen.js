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
            data_news:[],
            dataNews: ''
        }
    }
    componentDidMount = () => {
        // fetch( 'http://www.chtsc.com/index.php/component/content/article/14-infor/109-info-13', { method: 'GET' })
        fetch('http://www.chtsc.com/check_loan/mobile/news.json')
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            this.setState({ data_news: result })
        })
        .catch((error) => { console.log(error) })
    }

    _getNews(){
        data = this.state.data_news
        const news_items = data.map( (item, i) => {
            if ( item.type == 'header' ) {
                return (
                    <View key={i} style={styles.headNews}>
                        <Text style={{ fontWeight: 'bold' }}> { item.text } </Text>
                    </View>
                )
            } else {
                return (
                    <TouchableOpacity key={i} style={styles.getNews} onPress={() => Linking.openURL( item.link )}>
                        <Text> { item.text } </Text>
                    </TouchableOpacity>
                )
            }
            
        });
        return news_items;
    }

    render(){
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
                    centerComponent={{ text: 'ข่าวประชาสัมพันธ์', style: { fontSize: 16, color:'#fff' } }}
                    backgroundColor='#248f24'                    
                />
                <ScrollView>
                    <View style={styles.contentNews}>
                        { this._getNews() }
                    </View>
                    
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
        // margin: 10,
        // padding: 10,
        backgroundColor: '#fff'
    },
    headNews: {
        padding: 10,
        backgroundColor: '#ccc'
    },
    getNews: {
        padding: 10,
        borderBottomWidth: 1
    }
})
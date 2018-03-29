import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    FlatList,
    Alert
} from 'react-native'
import { Header, Icon } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'

const news = [
    { id: 1, head_news: 'Head News 1', content_news: 'This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html' },
    { id: 2, head_news: 'Head News 2', content_news: 'This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html' },
    { id: 3, head_news: 'Head News 3', content_news: 'This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html' },
    { id: 4, head_news: 'Head News 4', content_news: 'This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html' },
]

class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: null
        }
    }

    render() {
        const swipeSetting ={
            autoClose: true,
            onClose: ( secId, rowId, direction ) => {
                if( this.state.activeRowKey != null ) {
                    this.setState({ activeRowKey: null })                    
                }
            },
            onOpen: ( secId, rowId, direction ) => {
                this.setState({ activeRowKey: this.props.item.id })
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                { text: 'No', onPress: () => {style: 'cancel'} },
                                { text: 'Yes', onPress: () => {
                                    news.splice(this.props.index, 1)
                                    this.props.parentFlatList.refreshFlatList(deletingRow)
                                }},
                            ],
                            { cancelable: true }
                        )
                    },
                    text: 'delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }

        return (
            <Swipeout {...swipeSetting}>
                <View style={styles.swiper}>
                    <Text>{ this.props.item.head_news }</Text>
                    <Text>{ this.props.item.content_news }</Text>                
                </View>
            </Swipeout>
        )
    }
}

class FlatListData extends Component {
    state = {
        data: [],
        deleteRowKey: null
    }

    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            }
        })
    }

    componentDidMount = () => {
        fetch( 'https://jsonplaceholder.typicode.com/posts/', { method: 'GET' })
            .then(res => res.json())
            .then((resJson) => { this.setState({ data: resJson }) })
            .catch((error) => { console.log(error) })
    }

    render() {
        return (
            <FlatList 
                data={news}
                renderItem={({item, index}) => {
                    return (
                        <FlatListItem 
                            item={item} 
                            index={index}
                            key={index}
                            parentFlatList={this}
                        />
                    )
                }}
                keyExtractor={({item, index})=> index}                                      
            />
        )
    }
}

export default class newPost extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{
                            icon: 'home' ,
                            onPress: () => {this.props.navigation.navigate('HomeScreen')},
                    }}
                    centerComponent={{ text: 'ข่าวใหม่', style: { fontSize: 16, color:'#fff' } }}
                    statusBarProps={{ barStyle: 'default' }}
                    backgroundColor='#33cc33'                    
                />
                <ScrollView>
                    <View style={styles.contentPost}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            underlineColorAndroid='transparent'
                            style={styles.textinput}
                        />
                        <TouchableOpacity style={styles.btnPost}>
                            <Text>โพสต์</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginBottom:10}}>
                        <FlatListData />
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
    contentPost: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff'
    },
    headNews: {
        fontWeight: 'bold',
        fontSize: 20
    },
    textinput: {
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 5
    },
    btnPost: {
        marginTop: 10,
        marginLeft: '70%',
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#f1ff1d',
        borderRadius: 5
    },
    swiper: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
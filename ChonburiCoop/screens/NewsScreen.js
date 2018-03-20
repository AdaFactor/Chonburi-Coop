import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native'
import { Header, Icon } from 'react-native-elements'

const news = [
    { id: 1, head_news: 'Head News 1', content_news: 'This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html' },
    { id: 2, head_news: 'Head News 2', content_news: 'This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html' },
    { id: 3, head_news: 'Head News 3', content_news: 'This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html' },
    { id: 4, head_news: 'Head News 4', content_news: 'This build could be faster, please consider using the Gradle Daemon: https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html' },
    
]

export default class NewsScreen extends Component {
  render(){
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{
                        icon: 'arrow-back' ,
                        onPress: () => {this.props.navigation.navigate('HomeScreen')}
                }}
                centerComponent={{ text: 'สารประชาสัมพันธ์', style: { fontSize: 16, color:'#fff' } }}
                statusBarProps={{ translucent: true }}
            />
            <ScrollView>
                {
                    news.map(( itemNews, i ) => (
                        <View key={i} style={styles.contentNews}>
                            <Text style={styles.headNews}>{ itemNews.head_news }</Text>
                            <Text>{ itemNews.content_news }</Text>
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
import React, { Component } from 'react'
import { 
    StyleSheet,
    Image 
} from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'

export default class BottomNav extends React.Component {

    render() {
        return (
            <BottomNavigation
                labelColor="white"
                rippleColor="white"
                style={{
                    justifyContent: 'center',
                    height: 40,
                    elevation: 5,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                onTabChange={newTabIndex => alert(`New Tab at position ${newTabIndex}`)}
            >
                <Tab
                    barBackgroundColor="#26B21F"                
                    icon={<Image source={require('../static/images/profile-bottom.png')} />}
                />
                <Tab
                    barBackgroundColor="#26B21F"
                    icon={<Image source={require('../static/images/home-bottom.png')} />}
                />
                
            </BottomNavigation>
        )
    }
}
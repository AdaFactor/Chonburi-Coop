import React, { Component } from 'react'
import { 
    StyleSheet,
    Image 
} from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import { Actions } from 'react-native-router-flux';

export default class BottomNav extends React.Component {

    render() {
        return (
            <BottomNavigation
                labelColor="white"
                rippleColor="white"
                style={{
                    height: 56,
                    elevation: 8,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                onTabChange={newTabIndex => alert(`New Tab at position ${newTabIndex}`)}
            >
                <Tab
                    barBackgroundColor="#26B21F"                
                    label="Profile"
                    icon={<Image source={require('../static/images/profile-bottom.png')} />}
                    onPress={() => { Actions.profile() }}                    
                />
                <Tab
                    barBackgroundColor="#26B21F"
                    label="Home"
                    icon={<Image source={require('../static/images/home-bottom.png')} />}
                    onPress={() => { Actions.home() }}
                />
                
            </BottomNavigation>
        )
    }
}
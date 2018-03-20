import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import Bill from './screens/Bill'
import Saving from './screens/Saving'
import Guarantee from './screens/Guarantee'
import Calculator from './screens/Calculator'
import Profile from './screens/Profile'
import Association from './screens/Association'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StackNav />
    );
  }
}

const StackNav = StackNavigator(
  {
      LoginScreen: { screen: LoginScreen },
      HomeScreen: { screen: HomeScreen },
      Bill: { screen: Bill },
      Saving: { screen: Saving },
      Guarantee: { screen: Guarantee },
      Calculator: { screen: Calculator },
      Profile: { screen: Profile }, 
      Association: { screen: Association },                 
  },
  {
      headerMode: 'none'
  }
)
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { Image } from 'react-native'

import Login from '../screens/login'
import Register from '../screens/register'
import Home from '../screens/home'
import EvenementList from '../screens/evenementList'
import Jeux from '../screens/jeux'
import Evenement from '../screens/evenement'
import Settings from '../screens/settings'
import MyEvents from '../screens/myEvents'

import AuthLoadingScreen from '../components/auth'

import logoEvent from '../static/images/icons/event.png'
import logoHome from '../static/images/icons/user.png'
import logoJeux from '../static/images/icons/jeux.png'

const optionsGeneral = {
  mode: 'modal',
  headerMode: 'none'
}

const LogStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Register'
    }
  }
})

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LogStack
    }
  },
  optionsGeneral
)

const EventStack = createStackNavigator({
  EvenementList: {
    screen: EvenementList,
    navigationOptions: {
      header: () => null
    }
  },
  Evenement: {
    screen: Evenement,
    navigationOptions: {
      headerTitle: 'Evenement'
    }
  }
})

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  MyEvents: {
    screen: MyEvents,
    navigationOptions: {
      headerTitle: 'Mes Evenements'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerTitle: 'Paramètres'
    }
  }
})

const JeuxStack = createStackNavigator({
  Home: {
    screen: Jeux,
    navigationOptions: {
      header: () => null
    }
  }
})

JeuxStack.navigationOptions = {
  tabBarLabel: 'Jeux',
  tabBarIcon: <Image style={{ height: 26, width: 26 }} source={logoJeux} />
}

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: <Image style={{ height: 26, width: 26 }} source={logoHome} />
}

EventStack.navigationOptions = {
  tabBarLabel: 'Evenement',
  tabBarIcon: <Image style={{ height: 26, width: 26 }} source={logoEvent} />
}
export const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Evenement: EventStack,
    Jeux: JeuxStack
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'gray'
    }
  }  
)

export default createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )


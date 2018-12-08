/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import { Image } from 'react-native'

import Login from '../screens/login'
import Register from '../screens/register'
import Home from '../screens/home'
import EventList from '../screens/eventList'
import Game from '../screens/game'
import Event from '../screens/event'
import Settings from '../screens/settings'
import MyEvents from '../screens/myEvents'
import Chat from '../screens/chat'


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

const EventTab = createMaterialTopTabNavigator(
  {
    Evenement: Event,
    Chat: Chat
  },
  {
    tabBarOptions: {
      swipeEnabled: true,
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        height:'6%',
        backgroundColor: 'white',
      },
    }
  }
)

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
    screen: EventList,
    navigationOptions: {
      header: () => null
    }
  },
  Evenement: {
    screen: EventTab,
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
    screen: Game,
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
      activeTintColor: '#FFF',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#e69'
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


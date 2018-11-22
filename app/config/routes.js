/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Login from '../screens/login'
import HomeNav from '../components/navComponent'
import Register from '../screens/register'
import Home from '../screens/home'
import EvenementList from '../screens/evenementList'
import Jeux from '../screens/jeux'
import Evenement from '../screens/evenement'

const optionsGeneral = {
  mode: 'modal',
  headerMode: 'none'
}

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null
    }
  },
  HomeNav: {
    screen: HomeNav,
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

export const StackNav = createStackNavigator(
  {
    Login: {
      screen: LoginStack
    }
  },
  optionsGeneral
)

const EventStack = createStackNavigator(
  {
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
  }
)

export const BottomNav = createBottomTabNavigator({
  Home: Home,
  Evenement: EventStack,
  Jeux: Jeux
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        console.log('home')
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'EvenementList') {
          console.log('Event')
          iconName = `ios-options${focused ? '' : '-outline'}`
        } else if (routeName === 'Jeux') {
          console.log('Jeux')
          iconName = `ios-game-controller-a${focused ? '' : '-outline'}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
)
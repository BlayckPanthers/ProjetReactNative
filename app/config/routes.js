import { StackNavigator } from 'react-navigation'

import Login from '../screens/login'
import Home from '../screens/home'
import Register from '../screens/register'
import Evenement from '../screens/evenement'
import Jeux from '../screens/jeux'

const optionsGeneral = {
  mode: 'modal',
  headerMode: 'none'
}

const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: () => null
    }
  },
  Evenement: {
    screen: Evenement,
    navigationOptions: {
      headerTitle: 'Evenement'
    }
  },
  Jeux: {
    screen: Jeux,
    navigationOptions: {
      headerTitle: 'Jeux'
    }
  }
})

export default StackNavigator(
  {
    Login: {
      screen: LoginStack
    }
  },
  optionsGeneral
)

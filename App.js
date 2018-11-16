import { Provider } from 'react-redux'
import React from 'react'

import StackNavigator from './app/config/routes'
import { store } from './app/config/store'
//  <Provider >
export default class App extends React.Component {
  render() {
      
      return (
        <Provider store={store}>
            <StackNavigator />
        </Provider>
      )
  }
}

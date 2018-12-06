import { Provider } from 'react-redux'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import RouteNav from './app/config/routes'
import { store } from './app/config/store'
//  <Provider >
export default class App extends React.Component {
  state = {
    connectedTheme: store.getState('themes')
  }

  componentDidMount() {
    store.subscribe(() =>
      this.setState({ connectedTheme: store.getState('themes') })
    )
  }

  render() {
    const { connectedTheme } = this.state
    return (
      <Provider store={store}>
        <ThemeProvider theme={connectedTheme.themes.currentTheme}>
          <RouteNav theme="HELLO" />
        </ThemeProvider>
      </Provider>
    )
  }
}

//import liraries
import React, { Component } from 'react'
import {  AsyncStorage ,View, StatusBar, ActivityIndicator } from 'react-native'
import PropTypes from 'proptypes'

// create a component
class AuthLogin extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    constructor() {
        super()
        this._bootstrapAsync()
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken')

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}


//make this component available to the app
export default AuthLogin

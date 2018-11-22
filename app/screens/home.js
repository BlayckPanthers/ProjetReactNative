//import liraries
import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView, ButtonTouchableOpacity, TouchableText} from '../static/customStyle/formStyled'




// create a component
class HomeScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    componentDidUpdate() {

    }

    _signOutAsync = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
      }

    render() {

        return (
            <BackgroundView>
                <CenterView>
                <ButtonTouchableOpacity onPress={this._signOutAsync}title="Submit">
                        <TouchableText>Deconnexion</TouchableText>
                    </ButtonTouchableOpacity>
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default HomeScreen

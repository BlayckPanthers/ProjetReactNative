//import liraries
import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BackgroundView, CenterView } from '../static/customStyle/formStyled'

const ParameterTouchableOpacity = styled.TouchableOpacity ``


// create a component
class HomeScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }


    

    handleEventButtonPress = () => {
        this.props.navigation.navigate('Register')
    }

    handleJeuxButtonPress = () => {
        this.props.navigation.navigate('Jeux')
    }

    

    render() {
        const { navigation } = this.props
        const gameName = navigation.getParam('gameName')
        const date = navigation.getParam('date')
        const maxNumber = navigation.getParam('maxNumber')
        const eventName = navigation.getParam('eventName')
        return (

            <BackgroundView>
                <CenterView>
                    <Text>{gameName} {date} {maxNumber} {eventName}</Text>
                    <ParameterTouchableOpacity onPress={this.handleEventButtonPress}>
                        <Text>GO to Event</Text>
                    </ParameterTouchableOpacity>
                    <ParameterTouchableOpacity onPress={this.handleJeuxButtonPress}>
                        <Text>GO to Jeux</Text>
                    </ParameterTouchableOpacity>
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default HomeScreen

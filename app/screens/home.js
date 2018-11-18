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
        this.props.navigation.navigate('Evenement')
    }

    handleJeuxButtonPress = () => {
        this.props.navigation.navigate('Jeux')
    }

    

    render() {
        return (

            <BackgroundView>
                <CenterView>
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

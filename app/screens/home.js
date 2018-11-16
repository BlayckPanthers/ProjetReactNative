//import liraries
import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParameterTouchableOpacity = styled.TouchableOpacity ``

const BackgroundView = styled.View`
    flex: 1;
`

const CenterView = styled.View`
flex: 5;
justify-content: center;
align-items: center;
`


// create a component
class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    // Navigate to Register
    handleRegisterButtonPress = () => {
        this.props.navigation.navigate('Register')
    }

    handleEventButtonPress = () => {
        this.props.navigation.navigate('Event')
    }

    handleJeuxButtonPress = () => {
        this.props.navigation.navigate('Jeux')
    }

    render() {
        return (
            <BackgroundView>
                <CenterView>
                    <ParameterTouchableOpacity onPress={this.handleRegisterButtonPress}>
                        <Text>GO to Register</Text>
                    </ParameterTouchableOpacity>
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
export default Home

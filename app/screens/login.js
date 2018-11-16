//import liraries
import React, { Component } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
class Login extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    handleHomeButtonPress = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <BackgroundView>
                <CenterView>
                    <ParameterTouchableOpacity onPress={this.handleHomeButtonPress}>
                        <Text>Go Home</Text>
                    </ParameterTouchableOpacity>
                </CenterView>
            </BackgroundView>
        )
    }
}


//make this component available to the app
export default Login

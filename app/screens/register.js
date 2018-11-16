//import liraries
import React, { Component } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const BackgroundView = styled.View`
    flex: 1;
`

const CenterView = styled.View`
flex: 5;
justify-content: center;
align-items: center;
`


// create a component
class Register extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    render() {
        return (
            <BackgroundView>
                <CenterView>
                    <Text>Register</Text>
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default Register

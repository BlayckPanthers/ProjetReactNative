//import liraries
import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView } from '../static/customStyle/formStyled'



// create a component
class Evenement extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    render() {
        return (
            <BackgroundView>                
                <CenterView>
                    <Text>Evenement</Text>
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default Evenement

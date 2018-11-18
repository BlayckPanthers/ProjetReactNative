//import liraries
import React, { Component } from 'react'
import { Text} from 'react-native'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView } from '../static/customStyle/formStyled'

// create a component
class EvenementScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    render() {
        return (
            <BackgroundView>    
                <CenterView>
                    <Text>GG</Text>
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default EvenementScreen

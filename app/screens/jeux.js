//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackgroundView } from '../static/customStyle/formStyled'
import Jeux from '../components/jeux'


// create a component
class JeuxScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    render() {
        return (
            <BackgroundView>
                <Jeux/>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default JeuxScreen

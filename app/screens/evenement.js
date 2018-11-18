//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView, Separator } from '../static/customStyle/formStyled'

import Evenement from '../components/evenement'

import CsgoImage from '../static/images/csgo.jpg'
import LolImage from '../static/images/lol.jpg'

// create a component
class EvenementScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    render() {
        return (
            <BackgroundView>                
                <CenterView>
                    <Evenement EventName="Tournois 1V1" TotalNumberEvent="48"
                        ActualNumberEvent="5" SourceImage={CsgoImage}
                        DateEvent="29-05-2018 - 19H" />
                    <Separator/>
                    <Evenement EventName="ARAM" TotalNumberEvent="48"
                        ActualNumberEvent="5" SourceImage={LolImage}
                        DateEvent="31-05-2018 - 19H" />
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default EvenementScreen

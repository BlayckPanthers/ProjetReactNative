//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView } from '../static/customStyle/formStyled'
import Jeux from '../components/jeux'
import styled from 'styled-components'

import CsgoImage from '../static/images/csgo.jpg'
import LolImage from '../static/images/lol.jpg'

const Separator =  styled.View`
marginTop: 10px;
`

// create a component
class JeuxScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    render() {
        return (
            <BackgroundView>
                <CenterView>
                    <Jeux SourceImage={CsgoImage} GameName="CS GO" TotalNumberEvent="20"  />
                    <Separator/>
                    <Jeux SourceImage={LolImage} GameName="LOL" TotalNumberEvent="8"  />
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default JeuxScreen

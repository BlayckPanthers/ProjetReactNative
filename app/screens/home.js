//import liraries
import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Evenement from '../components/evenement'

import { BackgroundView, CenterView, Separator } from '../static/customStyle/formStyled'
import LolImage from '../static/images/lol.jpg'

const ParameterTouchableOpacity = styled.TouchableOpacity ``


// create a component
class HomeScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    componentDidUpdate(){

    }

    

    render() {
        const { navigation } = this.props
        const date = navigation.getParam('date', '')
        const maxNumber = navigation.getParam('maxNumber', 0)
        const eventName = navigation.getParam('eventName', '')

        if(date !== '' && maxNumber !== 0 && eventName !== '' ) {
            return <BackgroundView>
            <CenterView>
                <Evenement EventName= {eventName} TotalNumberEvent={maxNumber}
                    ActualNumberEvent={5} SourceImage={LolImage}
                    DateEvent= {date} />
                <Separator/>
            </CenterView>
            </BackgroundView>
        }else{
            return (
                <BackgroundView>
                    <CenterView>
                    </CenterView>
                </BackgroundView>
            )
        }
    }
}

//make this component available to the app
export default HomeScreen

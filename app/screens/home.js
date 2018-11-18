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


    

    handleEventButtonPress = () => {
        this.props.navigation.navigate('Register')
    }

    handleJeuxButtonPress = () => {
        this.props.navigation.navigate('Jeux')
    }



    render() {
        const { navigation } = this.props
        const date = navigation.getParam('date')
        const maxNumber = navigation.getParam('maxNumber')
        const eventName = navigation.getParam('eventName')

        const renderElement = () => {
            if (date == '' || maxNumber == 0 || eventName == '' ) {
               return <Evenement EventName= {eventName} TotalNumberEvent={maxNumber}
               ActualNumberEvent={5} SourceImage={LolImage}
               DateEvent= {date} />
 
            }
            return null
         }
    
        return (

            <BackgroundView>
                <CenterView>
                { renderElement() }
                <Separator/>
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

//import liraries
import React, { Component } from 'react'
import { Text} from 'react-native'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView } from '../static/customStyle/formStyled'
import styled from 'styled-components'

export const EventTitle = styled.Text`
justifyContent: center;
text-align: center;
font-weight: 500;
backgroundColor: #000000;
color: #FFFFFF;
`

export const User = styled.Text`
text-align: center;
font-weight: 500;
font-size: 25px;
color: #000000;
margin-bottom: 10px;
margin-top: 10px;

`

// create a component
class EvenementScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    render() {
        const { navigation } = this.props
        const date = navigation.getParam('date', '')
        const maxNumber = navigation.getParam('maxNumber', 0)
        const eventName = navigation.getParam('eventName', '')

        return (
            <BackgroundView>
                <EventTitle>{eventName}</EventTitle> 
                <Text>{maxNumber}</Text>     
                <CenterView>
                    <User>Blayck</User>
                    <User>Fellart</User>
                    <User>Testo</User>
                    <User>Longue Vie</User>
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default EvenementScreen

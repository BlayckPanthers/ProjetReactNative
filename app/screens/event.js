//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// CONTAINER
const BackgroundView = styled.View`
flex: 1;
`
// TOP
const TopView = styled.View`
flex: 1;
flex-grow: 1;
flexDirection: row;
backgroundColor: ${props => props.theme.color.second};
justifyContent: space-between;
`

const ImageViewHead = styled.Image`
width: 75px;
height: 75px;
borderRadius: 37.5;
borderWidth: 2;
borderColor: black;
justifyContent: flex-start;
`

const EventTitle = styled.Text`
text-align: center;
alignItems: center;
justifyContent: center;
font-weight: 500;
font-size: 25px;
color: ${props => props.theme.color.third};
margin-bottom: 10px;
margin-top: 10px;
`

const Gamers = styled.Text`
justifyContent: flex-end;
font-weight: 500;
font-size: 15px;
color: ${props => props.theme.color.third};
margin-top: 10px;
`

// BODY
const BodyView = styled.View`
flex: 5;
backgroundColor: silver;
`

const TopViewCenter = styled.View `
flex: 5;
justify-content: center;
align-items: center;
`

const User = styled.Text`
text-align: center;
alignItems: center;
justifyContent: center;
font-weight: 500;
font-size: 25px;
color: #000000;
margin-bottom: 10px;
margin-top: 10px;
`

// create a component
class EventScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    render() {
        const { navigation } = this.props
        const date = navigation.getParam('date', '')
        const maxNumber = navigation.getParam('maxNumber', 0)
        const eventName = navigation.getParam('eventName', '')
        const gameImg = navigation.getParam('gameImg', '')
        const actualNumber = navigation.getParam('actualNumber', '')

        return (
            <BackgroundView>
                <TopView>
                    <ImageViewHead source={gameImg} />
                    <EventTitle>{eventName}</EventTitle>
                    <Gamers>{actualNumber}/{maxNumber}</Gamers>
                </TopView>
                <BodyView>
                    <TopViewCenter>
                        <User>Blayck</User>
                        <User>Fellart</User>
                        <User>Testo</User>
                        <User>Longue Vie</User>
                    </TopViewCenter>
                </BodyView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default EventScreen

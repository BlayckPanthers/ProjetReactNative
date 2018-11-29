//import liraries
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BackgroundView = styled.View`
flex: 1;
`

const EventTitle = styled.Text`
justifyContent: center;
text-align: center;
font-weight: 500;
backgroundColor: #000000;
color: #FFFFFF;
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

export const TopViewCenter = styled.View `
flex: 5;
justify-content: center;
align-items: center;
`

export const TopViewHead = styled.View `
flex: 1;
marginTop:25;
flexDirection: row;
justifyContent: space-between;
`

export const ImageViewHead = styled.Image`
width: 22%;
height: 100%;
borderRadius: 100;
borderWidth: 2;
borderColor: black;
justifyContent: flex-start;
`

const TopView = styled.View`
flex: 1;
flex-grow: 1;
flexDirection: row;
backgroundColor: #4169e1;
justifyContent: space-between;
`
export const ViewHead = styled.View `
justifyContent: center;
`

const BodyView = styled.View`
flex: 5;
backgroundColor: silver;
`
const Gamers = styled.Text`
justifyContent: flex-end;
font-weight: 500;
font-size: 15px;
color: #000000;
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
        const gameImg = navigation.getParam('gameImg', '')
        const actualNumber = navigation.getParam('actualNumber', '')

        return (
            <BackgroundView>
                <TopView>
                    <ImageViewHead source={gameImg} />
                    <User>{eventName}</User>
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
export default EvenementScreen

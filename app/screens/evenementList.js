//import liraries
import React, { Component } from 'react'
import { Alert, Image, View } from 'react-native'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView, AddButton, InputTextDialogStyled, ButtonTouchableOpacity, TouchableText, Separator, SeparatorBigger } from '../static/customStyle/formStyled'
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog'
import styled from 'styled-components'

import Evenement from '../components/evenement'

import CsgoImage from '../static/images/csgo.jpg'
import LolImage from '../static/images/lol.jpg'
import boutonPlus from '../static/images/icons/eventAdd.png'


export const TopViewCenter = styled.View `
flex: 5;
justify-content: center;
align-items: center;
`

export const TopViewHead = styled.View `
flex: 1;
marginTop:25;
flexDirection: row;
justifyContent: center;
`

export const ImageViewHead = styled.Image`
width: 26px;
height: 26px;
`

const FlatList = styled.FlatList `
width: 100%;
flex: 1;
`

const ButtonAdd = styled.TouchableOpacity `
width: 70%;
marginBottom: 10;
height: 40;
backgroundColor: green;
borderColor:green;
borderRadius:10;
borderWidth: 1;
`

const ViewButtonAdd = styled.View `
flex: 1;
flexDirection: row;
justifyContent:space-evenly;
alignItems:center;
`

const TopView = styled.View`
flex: 1;
flex-grow: 1;
backgroundColor: yellow;
`

const BodyView = styled.View`
flex: 5;
backgroundColor: green;
`

const Text = styled.Text``



// create a component
class EvenementScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        maxNumber: PropTypes.number
    }

    state = {
        gameName: '',
        date: '',
        eventName: '',
        maxNumber: 0,
        visible: false
    }

    onChangeGameNameInput = gameName => {
        this.setState({gameName: gameName})
    }
    onChangeEventNameInput = eventName => {
        this.setState({eventName: eventName})
    }
    onChangeMaxNumberInput = maxNumber => {
        this.setState({maxNumber: maxNumber})
    }
    onChangeDateInput = date => {
        this.setState({date: date})
    }

    handleCreateEventButton = () => {
        const date = this.state.date
        const maxNumber = this.state.maxNumber
        const eventName = this.state.eventName

        if(date == ''|| isNaN(maxNumber) || eventName == '' ){   
            Alert.alert('Error', 'Please fill all the fields')
        }
        else {
            console.log('Go to next step')
            console.log(this.state)
            this.setState({ visible: false })
            this.props.navigation.navigate('Evenement', {
                date: date,
                maxNumber: maxNumber,
                eventName: eventName,
            })
        }
    }

    _handleClick = (event, max, date) => {
        this.props.navigation.navigate('Evenement', {
            date: date,
            maxNumber: max,
            eventName: event,
        })
    }

    render() {
        return (
            <BackgroundView>
                <TopView>
                    <TopViewHead>
                        <ButtonAdd  onPress={() => {
                                this.setState({ visible: true })
                            }}>
                            <ViewButtonAdd>
                                <ImageViewHead
                                    source= {boutonPlus}
                                />
                                <Text>Proposez un evenement</Text>
                            </ViewButtonAdd>
                        </ButtonAdd>
                    </TopViewHead>    
                </TopView>
                <BodyView>
                        <TopViewCenter>
                                <FlatList
                        

                                    data={[
                                        {eventName: 'Tournoi 5V5', 'totalNumber': 20, 'actualNumber':12, 'img':CsgoImage, 'dateEvent':'15-05-2018 - 19H'}, 
                                        {eventName: 'ARAM', 'totalNumber': 5, 'actualNumber':2, 'img':LolImage, 'dateEvent':'15-05-2018 - 23H'},
                                        {eventName: 'Tournoi 1V1', 'totalNumber': 48, 'actualNumber':41, 'img':CsgoImage, 'dateEvent':'15-05-2018 - 19H'},
                                        {eventName: 'RANKED', 'totalNumber': 5, 'actualNumber':3, 'img':LolImage, 'dateEvent':'15-05-2018 - 20H'},
                                        {eventName: 'Tournoi 1V1', 'totalNumber': 48, 'actualNumber':41, 'img':CsgoImage, 'dateEvent':'15-05-2018 - 19H'},
                                        {eventName: 'Tournoi 1V1', 'totalNumber': 48, 'actualNumber':41, 'img':CsgoImage, 'dateEvent':'15-05-2018 - 19H'},
                                        {eventName: 'RANKED', 'totalNumber': 5, 'actualNumber':3, 'img':LolImage, 'dateEvent':'15-05-2018 - 20H'},
                                        {eventName: 'Tournoi 1V1', 'totalNumber': 48, 'actualNumber':41, 'img':CsgoImage, 'dateEvent':'15-05-2018 - 19H'},
                                        {eventName: 'Tournoi 1V1', 'totalNumber': 48, 'actualNumber':41, 'img':CsgoImage, 'dateEvent':'15-05-2018 - 19H'},
                                        {eventName: 'RANKED', 'totalNumber': 5, 'actualNumber':3, 'img':LolImage, 'dateEvent':'15-05-2018 - 20H'},
                                        {eventName: 'Tournoi 1V1', 'totalNumber': 48, 'actualNumber':41, 'img':CsgoImage, 'dateEvent':'15-05-2018 - 19H'},
                                        {eventName: 'RANKED', 'totalNumber': 5, 'actualNumber':3, 'img':LolImage, 'dateEvent':'15-05-2018 - 20H'},
                                        {eventName: 'Tournoi 5V5', 'totalNumber': 20, 'actualNumber':12, 'img':CsgoImage, 'dateEvent':'15-05-2018 - 19H'},
                                        ]}
                                    renderItem={({item}) => 
                                    <Evenement EventName={item.eventName} TotalNumberEvent={item.totalNumber}
                                        ActualNumberEvent={item.actualNumber} SourceImage={item.img}
                                        DateEvent={item.dateEvent} OnClick={()=> this._handleClick(item.eventName,item.totalNumber, item.dateEvent)}/>     
                                    }
                                />
                        </TopViewCenter>
                </BodyView>
                <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                    this.setState({ visible: false })
                    }}
                    dialogTitle={<DialogTitle title="Créer un évènement" />}
                    width={0.9}
                >
                    <DialogContent>
                        <InputTextDialogStyled placeholder='Event name' onChangeText={eventName => this.onChangeEventNameInput(eventName)}/>
                        <InputTextDialogStyled placeholder='Player max number' onChangeText={maxNumber => this.onChangeMaxNumberInput(maxNumber)}/>
                        <InputTextDialogStyled placeholder='Date' onChangeText={date => this.onChangeDateInput(date)}/>
                        <SeparatorBigger/>
                        <CenterView>
                        <ButtonTouchableOpacity onPress={this.handleCreateEventButton}>
                            <TouchableText>Créer un évènement</TouchableText>
                        </ButtonTouchableOpacity>
                        </CenterView>
                    </DialogContent>
                </Dialog>          
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default EvenementScreen

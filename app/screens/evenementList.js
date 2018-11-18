//import liraries
import React, { Component } from 'react'
import { Text, Alert, Image } from 'react-native'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView, AddButton, InputTextStyled, ButtonTouchableOpacity, TouchableText, Separator } from '../static/customStyle/formStyled'
import Dialog, { DialogContent } from 'react-native-popup-dialog'
import boutonPlus from '../static/images/boutonPlus.png'

import Evenement from '../components/evenement'

import CsgoImage from '../static/images/csgo.jpg'
import LolImage from '../static/images/lol.jpg'


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

        if(date == ''|| maxNumber == 0 || eventName == '' ){
            Alert.alert('Error', 'Please fill all the fields')
        }
        else {
            console.log('Go to next step')
            console.log(this.state)
            this.setState({ visible: false })
            this.props.navigation.navigate('Home', {
                date: date,
                maxNumber: maxNumber,
                eventName: eventName,
            })
        }
    }

    render() {
        return (
            <BackgroundView>    
                <AddButton  onPress={() => {
                        this.setState({ visible: true })
                    }}>
                    <Image
                        source= {boutonPlus}
                    />
                </AddButton>
                <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                    this.setState({ visible: false })
                    }}
                >
                    <DialogContent>
                        <Text>Créer un évènement</Text>
                        <InputTextStyled placeholder='Event name' onChangeText={eventName => this.onChangeEventNameInput(eventName)}/>
                        <InputTextStyled placeholder='Player max number' onChangeText={maxNumber => this.onChangeMaxNumberInput(maxNumber)}/>
                        <InputTextStyled placeholder='Date' onChangeText={date => this.onChangeDateInput(date)}/>
                        <ButtonTouchableOpacity onPress={this.handleCreateEventButton}>
                            <TouchableText>Créer un évènement</TouchableText>
                        </ButtonTouchableOpacity>
                    </DialogContent>
                </Dialog>          
                <CenterView>
                    <Evenement EventName="Tournois 1V1" TotalNumberEvent={48}
                        ActualNumberEvent={5} SourceImage={CsgoImage}
                        DateEvent="29-05-2018 - 19H" />
                    <Separator/>
                    <Evenement EventName="ARAM" TotalNumberEvent={48}
                        ActualNumberEvent={5} SourceImage={LolImage}
                        DateEvent="31-05-2018 - 19H" />
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default EvenementScreen

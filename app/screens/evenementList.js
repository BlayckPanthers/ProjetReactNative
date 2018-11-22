//import liraries
import React, { Component } from 'react'
import { Alert, Image } from 'react-native'
import PropTypes from 'prop-types'
import { BackgroundView, CenterView, AddButton, InputTextDialogStyled, ButtonTouchableOpacity, TouchableText, Separator, SeparatorBigger } from '../static/customStyle/formStyled'
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog'

import Evenement from '../components/evenement'

import CsgoImage from '../static/images/csgo.jpg'
import LolImage from '../static/images/lol.jpg'
import boutonPlus from '../static/images/boutonPlus.png'


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
                <CenterView>
                    <Evenement EventName="Tournois 1V1" TotalNumberEvent={48}
                        ActualNumberEvent={5} SourceImage={CsgoImage}
                        DateEvent="29-05-2018 - 19H" OnClick={()=> this._handleClick('Tournois 1V1',48, '29-05-2018 - 19H')}/>
                    <Separator/>
                    <Evenement EventName="ARAM" TotalNumberEvent={48}
                        ActualNumberEvent={5} SourceImage={LolImage}
                        DateEvent="31-05-2018 - 19H" OnClick={() => this._handleClick('ARAM',5, '231-05-2018 - 19H')} />
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default EvenementScreen

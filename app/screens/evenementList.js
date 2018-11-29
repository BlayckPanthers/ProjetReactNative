//import liraries
import React, { Component } from 'react'
import { Alert} from 'react-native'
import PropTypes from 'prop-types'

import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog'
import styled from 'styled-components'

import Evenement from '../components/evenement'

import CsgoImage from '../static/images/csgo.jpg'
import LolImage from '../static/images/lol.jpg'
import boutonPlus from '../static/images/icons/eventAdd.png'

const BackgroundView = styled.View`
flex: 1;
`

const CenterView = styled.View`
flex: 5;
justify-content: center;
align-items: center;
`

const SeparatorBigger =  styled.View`
marginTop: 30px;
`

const ButtonTouchableOpacity = styled.TouchableOpacity `
width: 70%;
marginBottom: 10;
height: 40;
borderColor: black;
borderRadius:10;
borderWidth: 1;
`


const TouchableText = styled.Text `
textAlign: center;
marginTop: 10;
fontSize: 13;
`

const InputTextDialogStyled = styled.TextInput `
textAlign: center;
width: 100%;
marginBottom: 7;
height: 40;
borderRadius: 5;
borderWidth: 3;
fontSize: 13;
`

const FlatList = styled.FlatList`
flex: 1;
`

const TopViewHead = styled.View `
flex: 1;
marginTop:25;
flexDirection: row;
justifyContent: center;
`

const ImageViewHead = styled.Image`
width: 26px;
height: 26px;
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
alignItems:center;
`

const ViewTest = styled.View`
flex:1;
width: 80%;
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

    _keyExtractor = (item) => item.id;

    _handleClick = (event, max, date) => {
        this.props.navigation.navigate('Evenement', {
            date: date,
            maxNumber: max,
            eventName: event,
        })
    }

    _renderItem = ({item}) => (
        <Evenement EventName={item.eventName} TotalNumberEvent={item.totalNumber}
                ActualNumberEvent={item.actualNumber} SourceImage={item.img}
                DateEvent={item.dateEvent} OnClick={()=> this._handleClick(item.eventName,item.totalNumber, item.dateEvent)}/> 
    )

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
                    <ViewTest>
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
                                    renderItem={this._renderItem}
                                    keyExtractor={this._keyExtractor}
                                />
                    </ViewTest>
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

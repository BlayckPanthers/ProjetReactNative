//import liraries
import React, { Component } from 'react'
import { Alert} from 'react-native'
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog'
import PropTypes from 'prop-types'
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
backgroundColor: #e85693;
width: 70%;
marginBottom: 10;
height: 40;
borderColor: #e85693;
borderRadius:10;
borderWidth: 1;
`


const TouchableText = styled.Text `
color: #FFFFFF;
textAlign: center;
marginTop: 10;
fontSize: 13;
`

const InputTextDialogStyled = styled.TextInput `
textAlign: center;
width: 100%;
marginBottom: 7;
height: 40;
color: #FFFFFF;
borderRadius: 5;
borderWidth: 3;
fontSize: 13;
`

const FlatList = styled.FlatList`
flex:1;

margin: 5px;
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
backgroundColor: #e85693;
borderColor:#e85693;
borderRadius:10;
borderWidth: 1;
`

const TextButtonAdd = styled.Text `
color: #FFFFFF;
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
backgroundColor: #515151;
`

const BodyView = styled.View`
flex: 5;
backgroundColor: silver;
alignItems:center;
`

const ViewFlatList = styled.View`
flex:1;
width: 80%;
`
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
        gameImg: '',
        actualNumber: 0,
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
        const gameImg = this.state.gameImg
        const actualNumber = this.state.actualNumber

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
                gameImg: gameImg,
                actualNumber: actualNumber,
            })
        }
    }

    _keyExtractor = (item) => item.id;

    _handleClick = (event, max, date, gameImg, actualNumber, maxNumber) => {
        this.props.navigation.navigate('Evenement', {
            date: date,
            maxNumber: max,
            eventName: event,
            gameImg: gameImg,
            actualNumber: actualNumber,
            totalNumber: maxNumber
        })
    }

    _renderItem = ({item}) => (
        <Evenement EventName={item.eventName} TotalNumberEvent={item.totalNumber}
                ActualNumberEvent={item.actualNumber} SourceImage={item.img}
                DateEvent={item.dateEvent} OnClick={()=> this._handleClick(item.eventName,item.totalNumber, item.dateEvent, item.img, item.actualNumber, item.totalNumber)}/> 
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
                                <TextButtonAdd>Proposez un evenement</TextButtonAdd>
                            </ViewButtonAdd>
                        </ButtonAdd>
                    </TopViewHead>    
                </TopView>
                <BodyView>
                    <ViewFlatList>
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
                    </ViewFlatList>
                </BodyView>
                <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                    this.setState({ visible: false })
                    }}
                    dialogTitle={<DialogTitle  title="Créer un évènement"  />}
                    width={0.9}
                    backgroundColor= 'silver'
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

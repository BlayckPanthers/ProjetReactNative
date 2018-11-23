//import liraries
import React, { Component } from 'react'
import {AsyncStorage, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BackgroundView,TopView, BodyView,ButtonTouchableOpacity, TextCustomize} from '../static/customStyle/formStyled'

import PlatformGame from '../components/platformGame'

import iconProfil from '../static/images/icons/profile.png'
import iconSetting from '../static/images/icons/setting.png'
import iconMyGroups from '../static/images/icons/groups.png'

export const ButtonCustomize = styled.View `
width: 30%;
marginBottom: 10;
height: 40;
borderColor: white;
backgroundColor: #323EC7;
borderRadius:10;
borderWidth: 1;
`

export const ImageProfile = styled.Image `
width: 130px;
height: 130px;
borderColor: black;
borderRadius: 65;
borderWidth: 1;
`

export const ImageViewHead = styled.Image`
width: 26px;
height: 26px;

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
const Text = styled.Text``

const CenterView = styled.View`
flex: 1;
justifyContent: center;
alignItems: center;
`

// create a component
class HomeScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }
    componentDidUpdate() {

    }

    _signOutAsync = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
    }

    _handleMyEvents = () => {
        this.props.navigation.navigate('MyEvents')
    }

    _handleSettings = () => {
        this.props.navigation.navigate('Settings')
    }

    render() {

        return (
            <BackgroundView>
                <TopView>
                    <TopViewHead>
                        <TouchableOpacity style={{marginLeft:'2%'}} onPress={this._handleMyEvents}><ImageViewHead source={iconMyGroups}/></TouchableOpacity>
                        <TouchableOpacity style={{marginRight:'2%'}} onPress={this._handleSettings}><ImageViewHead  source={iconSetting}/></TouchableOpacity>
                    </TopViewHead>
                    <TopViewCenter>
                        <ImageProfile  source={iconProfil} />
                        <Text>Monster Creator XXX</Text>
                    </TopViewCenter>
                    </TopView>
                <BodyView>
                    <CenterView>
                        <PlatformGame plateforme="PSN" gamerTag="Blayck"/>
                        <PlatformGame plateforme="Xbox" gamerTag="BlayckPanthers"/>
                        <PlatformGame plateforme="Steam" gamerTag="Zango"/>
                    </CenterView>
                </BodyView>
            </BackgroundView>
        )
    }
}

{/* <ButtonCustomize title='Playstation'>
                        <Image style={{height: 26, width: 26, justifyContent:'center' }} source={iconPlay} />
                    </ButtonCustomize>
                    <ButtonTouchableOpacity onPress={this._signOutAsync} title='Submit'>
                        <TextCustomize>Deconnexion</TextCustomize>
                    </ButtonTouchableOpacity> */}

//make this component available to the app
export default HomeScreen

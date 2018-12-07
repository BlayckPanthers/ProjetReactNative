//import liraries
import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PlatformGame from '../components/platformGame'

import iconProfil from '../static/images/icons/profile.png'
import iconSetting from '../static/images/icons/setting.png'
import iconMyGroups from '../static/images/icons/groups.png'

// CONTAINER
const BackgroundView = styled.View`
flex: 1;
`

// TOP
const TopView = styled.View`
flex: 3;
backgroundColor: ${props => props.theme.color.second};
paddingRight:15;
paddingLeft:15;
paddingTop:15;
`

const TopViewHead = styled.View `
flex: 1;
marginTop:25;
flexDirection: row;
justifyContent: space-between;
`
const HeadLeftIconTouchable = styled.TouchableOpacity `
marginLeft: 2%;
`

const HeadRigthIconTouchable = styled.TouchableOpacity `
marginLeft: 2%;
`

const ImageViewHead = styled.Image`
width: 26px;
height: 26px;
`

const TopViewCenter = styled.View `
flex: 5;
justify-content: center;
align-items: center;
`

const ImageProfile = styled.Image `
borderColor: black;
width: 130px;
height: 130px;
borderRadius: 65;
borderWidth: 1;
marginBottom:15;
`
const Text = styled.Text`
marginBottom:15;`

// BODY
const BodyView = styled.View`
flex: 4;
backgroundColor: silver;
`

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
                        <HeadLeftIconTouchable style={{marginLeft:'2%'}} onPress={this._handleMyEvents}><ImageViewHead source={iconMyGroups}/></HeadLeftIconTouchable>
                        <HeadRigthIconTouchable style={{marginRight:'2%'}} onPress={this._handleSettings}><ImageViewHead  source={iconSetting}/></HeadRigthIconTouchable>
                    </TopViewHead>
                    <TopViewCenter>
                        <ImageProfile  source={iconProfil} />
                        <Text style={{color: '#FFFFFF'}} >Monster Creator XXX</Text>
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


//make this component available to the app
export default HomeScreen

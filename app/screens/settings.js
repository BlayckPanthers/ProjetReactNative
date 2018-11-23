//import liraries
import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import PropTypes from 'proptypes'
import styled from 'styled-components'

import {BackgroundView, TopView, BodyView, CenterView} from '../static/customStyle/formStyled'

const ButtonDisconnect = styled.TouchableOpacity `
width: 70%;
marginBottom: 10;
height: 40;
backgroundColor: red;
borderColor:red;
borderRadius:10;
borderWidth: 1;
`

const TextDisconnect = styled.Text `
textAlign: center;
fontWeight: bold;
marginTop: 10;
fontSize: 13;
color: white;
`

// create a component
class SettingsScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <BackgroundView>
                <View style={{flex: 8}}>
                    
                </View>
                <View style={{flex: 1}}>
                    <CenterView>
                        <ButtonDisconnect onPress={this._signOutAsync} title='Submit'>
                                <TextDisconnect>Deconnexion</TextDisconnect>
                        </ButtonDisconnect>
                    </CenterView>
                </View>                            
            </BackgroundView>
        )
    }
}
//make this component available to the app
export default SettingsScreen

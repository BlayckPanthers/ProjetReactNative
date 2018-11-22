//import liraries
import React, { Component } from 'react'
import {AsyncStorage, Image} from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BackgroundView, CenterView,TopView, BodyView,ButtonTouchableOpacity, TextCustomize} from '../static/customStyle/formStyled'

import iconPlay from '../static/images/icons/playstationWhite.png'

export const ButtonCustomize = styled.View `
width: 30%;
marginBottom: 10;
height: 40;
borderColor: white;
backgroundColor: #323EC7;
borderRadius:10;
borderWidth: 1;
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

    render() {

        return (
            <BackgroundView>
                <TopView>
                    
                </TopView>
                <BodyView>

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

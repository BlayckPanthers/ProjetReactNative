//import liraries
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { View, AsyncStorage, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'proptypes'
import styled from 'styled-components'

import { themeBlue, themeRed, themeGreen } from '../config/themes'
import allTheActions from '../actions'

const BackgroundView = styled.View`
flex: 1;
`

const CenterView = styled.View`
flex: 5;
justify-content: center;
align-items: center;
`

const ButtonDisconnect = styled.TouchableOpacity `
width: 70%;
marginBottom: 10;
height: 40;
backgroundColor: ${props => props.theme.color.first};
borderColor: ${props => props.theme.color.first};
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
        navigation: PropTypes.object,
        actions: PropTypes.object
    }

    handleThemePress = theme => {
        const { actions } = this.props
        actions.themes.changeTheme(theme)
        this.props.navigation.popToTop()
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
    }

    render() {
        console.log('MapStateToProps', this.props)
        return (
            <BackgroundView>
                <View style={{flex: 8}}>
                <TouchableOpacity onPress={() => this.handleThemePress(themeBlue)}>
                    <Text>Palette bleu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleThemePress(themeRed)}>
                    <Text>Palette rouge</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleThemePress(themeGreen)}>
                    <Text>Palette vert</Text>
                </TouchableOpacity>
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
const mapStateToProps = state => {
    return {
        themes: state.themes.currentTheme
    }
}

const mapDispatchToProps = dispatch => ({
    actions: {
        themes: bindActionCreators(allTheActions.themes, dispatch)
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsScreen)

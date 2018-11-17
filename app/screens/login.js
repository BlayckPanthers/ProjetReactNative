//import liraries
import React, { Component } from 'react'
import { Text, Alert } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { BackgroundView, CenterView, 
    ButtonTouchableOpacity, TouchableText, 
    InputTextStyled } from '../static/customStyle/formStyled'



const RegisterLinkTouchable = styled.TouchableOpacity ``


// create a component
class Login extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    state = {
        isLoggedIn: false,
        username: '',
        password: ''
    }

    onChangeUserNameInput = username => {
        this.setState({username : username })
    }

    onChangePassWordInput = password => {
        this.setState({password : password })
    }

    // Navigate to Register
    handleRegisterLinkButton = () => {
        this.props.navigation.navigate('Register')
    }

    handleHomeButtonPress = () => {
        this.props.navigation.navigate('Home')
    }

    handleLoginButton = () => {
        const username = this.state.username
        const password = this.state.password
        if(username !== '' && !password !== ''){
            this.props.navigation.navigate('Home')
        }else {
            Alert.alert('Error', 'Error: Invalid password and username')
        }
    }

    render() {
        return (
            <BackgroundView>
                <CenterView>
                    {/* <ParameterTouchableOpacity onPress={this.handleHomeButtonPress}>
                        <Text>Go Home</Text>
                    </ParameterTouchableOpacity> */}

                    <InputTextStyled placeholder='Username' onChangeText={username => this.onChangeUserNameInput(username)}/>
                    <InputTextStyled secureTextEntry={true} placeholder='Password' onChangeText={password => this.onChangePassWordInput(password)}/>
                    <ButtonTouchableOpacity onPress={this.handleLoginButton}title="Submit">
                        <TouchableText>Submit</TouchableText>
                    </ButtonTouchableOpacity>
                    <RegisterLinkTouchable onPress={this.handleRegisterLinkButton}>
                        <Text>Pas de compte ? Inscrivez-vous ici !</Text>
                    </RegisterLinkTouchable>
                </CenterView>
            </BackgroundView>
        )
    }
}


//make this component available to the app
export default Login

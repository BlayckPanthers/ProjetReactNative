//import liraries
import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { BackgroundView, CenterView, 
    ButtonTouchableOpacity, TouchableText, 
    InputTextStyled } from '../static/customStyle/formStyled'
import {verifyMail} from '../config/tools'



const RegisterLinkTouchable = styled.TouchableOpacity ``


// create a component
class LoginScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    state = {
        isLoggedIn: false,
        mail: '',
        password: ''
    }

    onChangeUserNameInput = mail => {
        this.setState({mail : mail })
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
        const mail = this.state.mail
        const password = this.state.password
        // if(mail !== '' && !password !== ''){
        //     if(!verifyMail(mail)){
        //         console.log('Nah good')
        //     }
        //     else {
        //         console.log('Go to next step')
        //         console.log(this.state)
        //     }
        // }else {
        //     Alert.alert('Error', 'Error: Invalid password and mail')
        // }
       this.props.navigation.navigate('HomeNav')
    }

    render() {
        return (
            <BackgroundView>
                <CenterView>
                    {/* <ParameterTouchableOpacity onPress={this.handleHomeButtonPress}>
                        <Text>Go Home</Text>
                    </ParameterTouchableOpacity> */}

                    <InputTextStyled placeholder='e-mail' onChangeText={mail => this.onChangeUserNameInput(mail)}/>
                    <InputTextStyled secureTextEntry={true} placeholder='Password' onChangeText={password => this.onChangePassWordInput(password)}/>
                    <ButtonTouchableOpacity onPress={this.handleLoginButton}title="Submit">
                        <TouchableText>Submit</TouchableText>
                    </ButtonTouchableOpacity>
                    <TouchableText> New to EazyLevel ? </TouchableText>
                    <View
                        style={{
                            width: '70%',
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                        />
                    <ButtonTouchableOpacity onPress={this.handleRegisterLinkButton}>
                        <TouchableText>Create your EazyLevel Account</TouchableText>
                    </ButtonTouchableOpacity>
                </CenterView>
            </BackgroundView>
        )
    }
}


//make this component available to the app
export default LoginScreen

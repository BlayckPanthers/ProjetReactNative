//import liraries

import React, { Component } from 'react'
import { AsyncStorage} from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {verifyMail} from '../utils/tools'

// CONTAINER
const BackgroundView = styled.View`
flex: 1;
`

// CENTERED
const CenterView = styled.View`
flex: 5;
justify-content: center;
align-items: center;
`

// FORM
const InputTextStyled = styled.TextInput `
textAlign: center;
width: 70%;
marginBottom: 7;
height: 40;
borderRadius: 5;
borderWidth: 3;
fontSize: 13;
`

const ButtonTouchableOpacity = styled.TouchableOpacity `
width: 70%;
marginBottom: 10;
height: 40;
borderColor: ${props => props.theme.color.first};
backgroundColor: ${props => props.theme.color.first};
borderRadius:10;
borderWidth: 1;
`

const TouchableText = styled.Text `
textAlign: center;
marginTop: 10;
color: ${props => props.theme.color.third};
fontSize: 13;
`

const Trait = styled.View `
width: 70%;
borderBottomColor: black;
borderBottomWidth: 1;
`

// create a component
class LoginScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    state = {
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

    handleLoginButton = async() => {
        const {mail,password} = this.state
        await AsyncStorage.setItem('userToken', 'abc')
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
       this.props.navigation.navigate('App')
    }

    render() {
        return (
            <BackgroundView>
                <CenterView>
                    <InputTextStyled placeholder='e-mail' onChangeText={mail => this.onChangeUserNameInput(mail)}/>
                    <InputTextStyled secureTextEntry={true} placeholder='Password' onChangeText={password => this.onChangePassWordInput(password)}/>
                    <ButtonTouchableOpacity onPress={this.handleLoginButton}title="Submit">
                        <TouchableText>Submit</TouchableText>
                    </ButtonTouchableOpacity>
                    <TouchableText style={{color: 'black'}}> New to EazyLevel ? </TouchableText>
                    <Trait/>
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

//import liraries
import React, { Component } from 'react'
import { Text, Alert } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {verifyMail} from '../config/tools'


const BackgroundView = styled.View`
flex: 1;
`
const CenterView = styled.View`
flex: 5;
justify-content: center;
align-items: center;
`
const ButtonTouchableOpacity = styled.TouchableOpacity `
width: 70%;
marginBottom: 10;
height: 40;
backgroundColor: #e85693;
borderColor: #e85693;
borderRadius:10;
borderWidth: 1;
`

const TouchableText = styled.Text `
textAlign: center;
marginTop: 10;
color: #FFFFFF;
fontSize: 13;
`

const InputTextStyled = styled.TextInput `
textAlign: center;
width: 70%;
marginBottom: 7;
height: 40;
borderRadius: 5;
borderWidth: 3;
fontSize: 13;
`

// create a component
class RegisterScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    state = {
        username: '',
        password: '',
        confirmpassword: '',
        mail: '',
    }

    onChangeMailInput = mail => {
        this.setState({mail: mail})
    }
    onChangeUserNameInput = username => {
        this.setState({username: username})
    }
    onChangePassWordInput = password => {
        this.setState({password: password})
    }
    onChangeConfirmPassWordInput = confirmpassword => {
        this.setState({confirmpassword: confirmpassword})
    }

    handleRegisterButton = () => {
        const username = this.state.username
        const mail = this.state.mail
        const password = this.state.password
        const confirmPsw = this.state.confirmpassword

        if(username !== '' && mail !== '' && password != '' && confirmPsw !== ''){
            if(!verifyMail(mail)){
                console.log('Nah good')
            }
            if (password !== confirmPsw) {
                console.log('Nah good PSWD different')
            }
            else {
                console.log('Go to next step')
                console.log(this.state)
                this.props.navigation.navigate('Login')
            }
        }
        else {
            Alert.alert('Error', 'Please fill all the fields')
        }

    }

    render() {
        return (
            <BackgroundView>
                <CenterView>
                    <InputTextStyled placeholder='Email' onChangeText={email => this.onChangeMailInput(email)}/>
                    <InputTextStyled placeholder='Username' onChangeText={username => this.onChangeUserNameInput(username)}/>
                    <InputTextStyled secureTextEntry={true} placeholder='Password' onChangeText={password => this.onChangePassWordInput(password)}/>
                    <InputTextStyled secureTextEntry={true} placeholder='Confirm Password' onChangeText={cpassword => this.onChangeConfirmPassWordInput(cpassword)}/>
                    <ButtonTouchableOpacity onPress={this.handleRegisterButton}>
                        <TouchableText>Register</TouchableText>
                    </ButtonTouchableOpacity>
                </CenterView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default RegisterScreen

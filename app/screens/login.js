//import liraries
import React, { Component } from 'react'
import { View, AsyncStorage} from 'react-native'
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
borderColor: black;
borderRadius:10;
borderWidth: 1;
`

const TouchableText = styled.Text `
textAlign: center;
marginTop: 10;
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

    handleLoginButton = async() => {
        const mail = this.state.mail
        const password = this.state.password

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

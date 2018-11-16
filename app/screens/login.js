//import liraries
import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonTouchableOpacity = styled.TouchableOpacity `
width: 50%;
marginBottom: 10;
height: 40;
borderColor: black;
borderRadius:10;
borderWidth: 1;
fontSize: 20;
`
const TouchableText = styled.Text `
textAlign: center;
marginTop: 10;
`


const BackgroundView = styled.View`
flex: 1;
`

const CenterView = styled.View`
flex: 5;
justify-content: center;
align-items: center;
`

const InputLogin = styled.TextInput `
textAlign: center;
width: 50%;
marginBottom: 7;
height: 40;
borderRadius: 5;
borderWidth: 3;
fontSize: 20;
`


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

                    <InputLogin placeholder='Username' onChangeText={username => this.onChangeUserNameInput(username)}/>
                    <InputLogin secureTextEntry={true} placeholder='Password' onChangeText={password => this.onChangePassWordInput(password)}/>
                    <ButtonTouchableOpacity onPress={this.handleLoginButton}title="Submit">
                        <TouchableText>Submit</TouchableText>
                    </ButtonTouchableOpacity>
                </CenterView>
            </BackgroundView>
        )
    }
}


//make this component available to the app
export default Login

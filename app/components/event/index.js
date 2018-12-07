//import liraries
import React, { Component } from 'react'
import { View ,ImageBackground, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import PropTypes from 'proptypes'

const GameName = styled.Text `
height: 40%; 
color: white;
fontWeight: bold;
backgroundColor: black;
`

const TextViewOnImage = styled.View `
flex: 1;
height: 15%;
flexDirection: row;
justifyContent: space-between;
`

const CardView = styled.View `
width: 100%;
minHeight: 15%;
flexShrink:0;
borderWidth: 1;
borderColor: black;
borderRadius: 5;
marginBottom: 5;
`

const TextViewOnImageBottom = styled.View `
flex: 1;
flexDirection: column;
justifyContent: flex-end;
`

// create a component
class Event extends Component {
    static propTypes = {
        EventName: PropTypes.string,
        TotalNumberEvent: PropTypes.number,
        ActualNumberEvent: PropTypes.number,
        SourceImage: PropTypes.number,
        DateEvent: PropTypes.string,
        OnClick: PropTypes.func
    }

    

    render() {
        return (
            <CardView>
                <TouchableOpacity style={{flex: 1}} onPress={this.props.OnClick}>
                    <View style={{flex:1}}>
                        <ImageBackground source={this.props.SourceImage} style={{flex: 1,width: '100%', resizeMode:'contain'}} >
                            <TextViewOnImage>
                                    <GameName >{this.props.EventName}</GameName>
                                    <GameName >{this.props.ActualNumberEvent}/{this.props.TotalNumberEvent}</GameName>
                            </TextViewOnImage>
                            <TextViewOnImageBottom>
                                    <GameName style={{textAlignVertical: 'center',textAlign: 'center'}}>{this.props.DateEvent}</GameName>
                            </TextViewOnImageBottom>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </CardView>
        )
    }
}


//make this component available to the app
export default Event

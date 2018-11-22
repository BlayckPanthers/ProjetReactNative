//import liraries
import React, { Component } from 'react'
import { View ,ImageBackground, TouchableOpacity } from 'react-native'

import PropTypes from 'proptypes'

import {GameName, TextViewOnImage,TextViewOnImageBottom,CardView} from '../../static/customStyle/cardStyled'

// create a component
class Evenement extends Component {
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
                <TouchableOpacity onPress={this.props.OnClick}>
                    <ImageBackground source={this.props.SourceImage} style={{width: '100%', height: '100%'}} >
                        <View style={{flex:1}}>
                        <TextViewOnImage>
                                <GameName style={{height:'40%'}}>{this.props.EventName}</GameName>
                                <GameName style={{height:'40%'}}>{this.props.ActualNumberEvent}/{this.props.TotalNumberEvent}</GameName>
                        </TextViewOnImage>
                        <TextViewOnImageBottom>
                                <GameName style={{height:'40%',textAlignVertical: 'center',textAlign: 'center'}}>{this.props.DateEvent}</GameName>
                        </TextViewOnImageBottom>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </CardView>
        )
    }
}


//make this component available to the app
export default Evenement

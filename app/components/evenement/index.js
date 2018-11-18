//import liraries
import React, { Component } from 'react'
import { View ,ImageBackground } from 'react-native'

import PropTypes from 'proptypes'

import {GameName, TextViewOnImage,TextViewOnImageBottom,CardView} from '../../static/customStyle/cardStyled'

// create a component
class Evenement extends Component {
    static propTypes = {
        EventName: PropTypes.string,
        TotalNumberEvent: PropTypes.number,
        ActualNumberEvent: PropTypes.number,
        SourceImage: PropTypes.string,
        DateEvent: PropTypes.string
    }

    render() {
        return (
            <CardView>
                <ImageBackground source={this.props.SourceImage} style={{width: '100%', height: '100%'}} >
                    <View style={{flex:1}}>
                    <TextViewOnImage>
                            <GameName style={{height:'30%', }}>{this.props.EventName}</GameName>
                            <GameName style={{height:'30%'}}>{this.props.ActualNumberEvent}/{this.props.TotalNumberEvent}</GameName>
                    </TextViewOnImage>
                    <TextViewOnImageBottom>
                            <GameName style={{height:'30%',textAlignVertical: 'center',textAlign: 'center'}}>{this.props.DateEvent}</GameName>
                    </TextViewOnImageBottom>
                    </View>
                </ImageBackground>
            </CardView>
        )
    }
}


//make this component available to the app
export default Evenement

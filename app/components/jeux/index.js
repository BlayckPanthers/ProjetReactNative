//import liraries
import React, { Component } from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import PropTypes from 'proptypes'

import {GameName, TextViewOnImage, CardView} from '../../static/customStyle/cardStyled'

// create a component
class jeux extends Component {
    static propTypes = {
        GameName: PropTypes.string,
        TotalNumberEvent: PropTypes.number,
        SourceImage: PropTypes.number,
        OnClick: PropTypes.number
    }

    _handleClick = event => {
        console.log('jeux ' + event)
    }

    render() {
        return (
            <CardView>
                <TouchableOpacity onPress={this._handleClick(this.props.OnClick)}>
                    <ImageBackground source={this.props.SourceImage} style={{width: '100%', height: '100%'}} >
                        <TextViewOnImage>
                            <GameName>{this.props.GameName}</GameName>
                            <GameName>{this.props.TotalNumberEvent}</GameName>
                        </TextViewOnImage>
                    </ImageBackground>
                </TouchableOpacity>
            </CardView>
        )
    }
}



//make this component available to the app
export default jeux

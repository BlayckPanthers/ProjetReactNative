//import liraries
import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import PropTypes from 'proptypes'

import {GameName, TextViewOnImage, CardView} from '../../static/customStyle/cardStyled'

// create a component
class jeux extends Component {
    static propTypes = {
        GameName: PropTypes.string,
        TotalNumberEvent: PropTypes.number,
        SourceImage: PropTypes.string,
    }

    render() {
        return (
            <CardView>
                <ImageBackground source={this.props.SourceImage} style={{width: '100%', height: '100%'}} >
                    <TextViewOnImage>
                        <GameName>{this.props.GameName}</GameName>
                        <GameName>{this.props.TotalNumberEvent}</GameName>
                    </TextViewOnImage>
                </ImageBackground>
            </CardView>
        )
    }
}



//make this component available to the app
export default jeux

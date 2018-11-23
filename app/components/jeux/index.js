//import liraries
import React, { Component } from 'react'
import { ImageBackground, TouchableOpacity, View} from 'react-native'
import PropTypes from 'proptypes'

import styled from 'styled-components'

const GameName = styled.Text `
height: 20%; 
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
height: 100%;
flexShrink:0;
borderWidth: 1;
borderColor: black;
borderRadius: 5;
marginBottom:10;
`

// create a component
class jeux extends Component {
    static propTypes = {
        GameName: PropTypes.string,
        TotalNumberEvent: PropTypes.number,
        SourceImage: PropTypes.number,
        OnClick: PropTypes.number
    }
    render() {
        return (
            <CardView>
                <TouchableOpacity style={{flex: 1}}>
                    <View style={{flex: 1}} >
                        <ImageBackground source={this.props.SourceImage} style={{flex: 1,width: '100%', resizeMode:'contain'}} >
                            <TextViewOnImage>
                                <GameName>{this.props.GameName}</GameName>
                                <GameName>{this.props.TotalNumberEvent}</GameName>
                            </TextViewOnImage>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </CardView>
        )
    }
}



//make this component available to the app
export default jeux

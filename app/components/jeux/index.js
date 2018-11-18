//import liraries
import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
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
flexDirection: row;
justifyContent: space-between;
borderWidth: 1;
borderColor: black;
`

const CardView = styled.View `
width: 80%;
height: 10%;
borderWidth: 1;
borderColor: black;
borderRadius: 5;
`

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

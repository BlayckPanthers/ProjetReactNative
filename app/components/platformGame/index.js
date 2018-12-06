//import liraries
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'proptypes'

import iconPlay from '../../static/images/icons/PSN.png'
import iconXbox from '../../static/images/icons/xbox.png'
import iconSteam from '../../static/images/icons/steam.png'

const ImageViewHead = styled.Image`
width: 26px;
height: 26px;
margin: 3px;
`
const ButtonAdd = styled.View `
width: 70%;
marginBottom: 10;
height: 40;
backgroundColor: ${props => props.backColor == 'PSN' ? '#1F34D1' : props.backColor == 'Xbox' ? '#107C11' : '#171A21' };
borderColor: ${props => props.backColor == 'PSN' ? '#1F34D1' : props.backColor == 'Xbox' ? '#107C11' : '#171A21' };
borderRadius:10;
borderWidth: 1;
`

const Touche = styled.TouchableOpacity`
flex:1;
`

const ViewButtonAdd = styled.View `
flex: 1;
flexDirection: row;
justifyContent:center;
alignItems:center;
`

const TextBar = styled.Text` 
color:white;
fontWeight:bold;
`

const ViewCustom = styled.View`
flex: 1;
flexDirection:row;
alignItems:center;

`

// create a component
class platformGame extends Component {
    static propTypes = {
        gamerTag : PropTypes.string,
        plateforme: PropTypes.string
    }
    render() {
        const {plateforme, gamerTag} = this.props
        console.log(plateforme)
        const img = plateforme == 'PSN' ? iconPlay : plateforme == 'Xbox' ? iconXbox : iconSteam
        return (

                <ButtonAdd backColor={plateforme}>
                    <Touche>
                    <ViewButtonAdd>
                        <ViewCustom>
                            <ImageViewHead source={img}/>
                            <TextBar>{plateforme} ID: </TextBar>
                            <TextBar> {gamerTag} </TextBar>
                        </ViewCustom>
                    </ViewButtonAdd>

                    </Touche>
                </ButtonAdd>

        )
    }
}



//make this component available to the app
export default platformGame

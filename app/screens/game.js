//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Game from '../components/game'

import CsgoImage from '../static/images/csgo.jpg'
import LolImage from '../static/images/lol.jpg'

// CONTAINER
const BackgroundView = styled.View`
flex: 1;
`

// TOP
// flex: 1;
// flex-grow: 1;
const TopView = styled.View`
height:50px;
backgroundColor: ${props => props.theme.color.second};
`

// BODY
const BodyView = styled.View`
flex: 5;
backgroundColor: silver;
alignItems:center;
`
const ViewFlatList = styled.View`
flex:1;
width: 80%;
`

const FlatList = styled.FlatList`
flex: 1;
margin: 5px;
`



// create a component
class GameScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    _keyExtractor = (item) => item.id;

    _renderItem = ({item}) => (
        <Game SourceImage={item.img} GameName={item.gameName} TotalNumberEvent={item.totalNumber} />

    )

    render() {
        return (
            <BackgroundView>
                <TopView>

                </TopView>
                <BodyView>
                    <ViewFlatList>
                        <FlatList
                                data={[
                                    {gameName: 'CsGo', 'totalNumber': 20, 'img':CsgoImage}, 
                                    {gameName: 'LOL', 'totalNumber': 12, 'img':LolImage}
                                    ]}
                                renderItem={this._renderItem}
                                keyExtractor={this._keyExtractor}   
                            />

                    </ViewFlatList>
                </BodyView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default GameScreen

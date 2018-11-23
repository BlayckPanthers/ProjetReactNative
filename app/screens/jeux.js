//import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Jeux from '../components/jeux'


import CsgoImage from '../static/images/csgo.jpg'
import LolImage from '../static/images/lol.jpg'

const BackgroundView = styled.View`
flex: 1;
`
const FlatList = styled.FlatList`
flex: 1;
`
const TopView = styled.View`
flex: 1;
flex-grow: 1;
backgroundColor: yellow;
`

const BodyView = styled.View`
flex: 5;
backgroundColor: green;
alignItems:center;
`
const ViewTest = styled.View`
flex:1;
width: 80%;
`

// create a component
class JeuxScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    }

    _keyExtractor = (item) => item.id;

    _renderItem = ({item}) => (
        <Jeux SourceImage={item.img} GameName={item.gameName} TotalNumberEvent={item.totalNumber} />

    )

    render() {
        return (
            <BackgroundView>
                <TopView>

                </TopView>
                <BodyView>
                    <ViewTest>
                        <FlatList
                                data={[
                                    {gameName: 'CsGo', 'totalNumber': 20, 'img':CsgoImage}, 
                                    {gameName: 'LOL', 'totalNumber': 12, 'img':LolImage}
                                    ]}
                                renderItem={this._renderItem}
                                keyExtractor={this._keyExtractor}   
                            />

                    </ViewTest>
                </BodyView>
            </BackgroundView>
        )
    }
}

//make this component available to the app
export default JeuxScreen

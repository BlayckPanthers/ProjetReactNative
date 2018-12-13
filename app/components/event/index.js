//import liraries
import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

import PropTypes from 'proptypes'

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
                
                    <Card>
                        <TouchableOpacity style ={{flex: 1 }} onPress={this.props.OnClick}>
                            <CardItem header bordered>
                                <Left>
                                    <Thumbnail style={{marginTop: 5}} source={this.props.SourceImage} />
                                    <Body>
                                    <Text>{this.props.EventName}</Text>
                                    <Text note>Game name</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                {/* <Image source={this.props.SourceImage} style={{height: 200, width: null, flex: 1}}/> */}
                                </CardItem>
                            <CardItem footer bordered>
                                <Left>
                                    <Button transparent>
                                    <Icon active name="md-contact" />
                                    <Text>{this.props.ActualNumberEvent} / {this.props.TotalNumberEvent} </Text>
                                    </Button>
                                    <Text>{this.props.DateEvent}</Text>
                                </Left>
                                <Right>
                                    
                                </Right>
                        </CardItem>
                        </TouchableOpacity>
                        
                    </Card>


        )
    }
}


//make this component available to the app
export default Event

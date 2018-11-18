//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create a component
class jeux extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>jeux</Text>
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
})

//make this component available to the app
export default jeux

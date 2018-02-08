import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonsWrapper = () => {
    return (
        <View style={buttonsContainer}>
            <TouchableOpacity onPress={() => alert('button press')} >
                <Text style={buttonText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('button press')} >
                <Text style={buttonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('button press')} >
                <Text style={buttonText}>Comment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'red',
        borderWidth: 1,
        height: 40,
        alignItems: 'center'
    },
    button: {
        height: 30,
        width: 80,
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonText: {
        textAlign: 'center'
    }
})

const { buttonsContainer, button, buttonText } = styles;
export default ButtonsWrapper;
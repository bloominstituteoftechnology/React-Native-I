import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TokyoButtonsWrapper = () => {
    return (
        <View style={buttonsContainer}>
            <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
                <Text style={buttonText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
                <Text style={buttonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
                <Text style={buttonText}>Comment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        alignItems: 'center',
        margin: 5,
    },
    button: {
        height: 30,
        width: 90,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#56D2C7',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'

    }
});

const { buttonsContainer, button, buttonText } = styles;

export default TokyoButtonsWrapper;
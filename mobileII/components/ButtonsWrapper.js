import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonsWrapper = () => {
  return (
    <View style={buttonsContainer}>
      <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
        <Text style={buttonText}>BUTTON</Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
        <Text style={buttonText}>BUTTON</Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
        <Text style={buttonText}>BUTTON</Text>
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
    width: 90,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center'
  }
});

const { buttonsContainer, button, buttonText } = styles;

export default ButtonsWrapper;
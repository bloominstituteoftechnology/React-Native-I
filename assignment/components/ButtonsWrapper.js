import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonsWrapper = () => {
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
    justifyContent: 'center',
    height: 24,
    alignItems: 'center'
  },
  button: {
    height: 16,
    padding: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center'
  },
  buttonText: {}
});

const { buttonsContainer, button, buttonText } = styles;

export default ButtonsWrapper;

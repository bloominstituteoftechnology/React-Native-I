import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonsWrapper = () => {
  return (
    <View style={buttonsContainer}>
      <TouchableOpacity style={buttons} onPress={() => alert('Liked')}>
        <Text style={buttonText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={buttons} onPress={() => alert('Shared')}>
        <Text style={buttonText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={buttons} onPress={() => alert('Commented')}>
        <Text style={buttonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'brown',
    borderWidth: 1,
    justifyContent: 'space-around',
    width: '100%',
  },
  buttons: {
    borderColor: 'green',
    borderWidth: 1,
    height: 30,
    width: 90,
  },
  buttonText: {
    textAlign: 'center',
  },
});

const { buttonsContainer, buttons, buttonText } = styles;

export default ButtonsWrapper;

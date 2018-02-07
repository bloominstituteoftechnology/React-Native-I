import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Boxes = () => {
  return (
    <View style={BoxContainer}>
      <View style={Box}></View>
      <View style={Box}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  BoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    margin: 8,
    alignItems: 'center'
  },
  Box: {
    height: 70,
    width: '50%',
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center'
  }
});

const { BoxContainer, Box } = styles;

export { Boxes };

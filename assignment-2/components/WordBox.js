import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const WordBox = () => {
  return (
    <View style={BoxContainer}>
      <Text>This is text...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BoxContainer: {
    height: 150,
    width: '100%',
    margin: 8,
    borderWidth: 0.5,
    borderColor: 'black'
  }
});

const { BoxContainer } = styles;

export { WordBox };

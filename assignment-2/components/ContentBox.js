import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ContentBox = () => {
  return (
    <View style={Container}>
      <Text style={Header}>Some Random Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    alignItems: 'center'
  },
  Header: {
    height: 50,
    fontSize: 24,
    padding: 8,
    justifyContent: 'center'
  }
});

const { Container, Header } = styles;

export { ContentBox };

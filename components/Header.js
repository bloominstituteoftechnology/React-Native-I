import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={headerText}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#e3e3e3',
    height: 70,
    marginTop: 45,
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth: 1
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25
  }
});

const { headerContainer, headerText } = styles;

export default Header;

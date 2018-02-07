import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={header}>
      <Text style={headerText}>Some Random Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,

    marginTop: 20,
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  headerText: {
    fontSize: 24,
  },
});

const { header, headerText } = styles;

export default Header;

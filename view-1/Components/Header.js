import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  }
})
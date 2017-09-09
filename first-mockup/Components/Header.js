import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}></View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    flex: 1,
  }
})

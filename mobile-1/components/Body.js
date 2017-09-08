import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 5;
    backgroundColor: green;
  }
})

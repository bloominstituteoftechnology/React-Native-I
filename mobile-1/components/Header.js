import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        {/* <Text> I am the Header </Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    flex: 1,
  }
})

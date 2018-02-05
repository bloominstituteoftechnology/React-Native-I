import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class DesignI extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
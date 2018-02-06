import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableHighlight } from 'react-native';
import DesignI from './DesignI';
import DesignII from './DesignII';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DesignII />
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
  textAsButton: {
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5
  }
});
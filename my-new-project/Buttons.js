import React from 'react';
import { Button, View } from 'react-native';

const styles = require('./Styles.js');

export default class Buttons extends React.Component {
  render() {
    return (
      <View style={styles.buttonsView} >
        <View style={styles.button} ><Button title="Like" /></View>
        <View style={styles.button} ><Button title="Share" /></View>
        <View style={styles.button} ><Button title="Comment" /></View>
      </View>
    )
  }
}
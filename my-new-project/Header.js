import React from 'react';
import { Text, View } from 'react-native';

const styles = require('./Styles.js');

export default () => (
  <View style={styles.header}>
    <Text style={styles.headerText} >
      Cat
    </Text>
  </View>
)
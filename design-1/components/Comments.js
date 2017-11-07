import React from 'react';
import { View, Text } from 'react-native';

const styles = require('../styles/commentsStyles.js');

export default () => (
  <View>
    <Text style={styles.comment}>Some User: What a good boi!</Text>
    <Text style={styles.comment}>Another User: What a good boi!</Text>
    <Text style={styles.comment}>And Another User: What a good boi!</Text>
  </View>
)
import React from 'react';
import { View, Button, Text } from 'react-native';

const styles = require('../styles/listStyles.js');

export default () => (
  <View style={styles.listContainer}>
    <Text style={[styles.item, styles.selected]}>Like</Text>
    <Text style={styles.item}>Share</Text>
    <Text style={styles.item}>Comment</Text>
  </View>
)
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './PostStyleSheet';

export default () => (
  <View style={styles.buttons}>
    <TouchableHighlight
      onPress={() => console.log('liked')}
      activeOpacity={0.85}
      underlayColor="blue"
    >
      <Text style={styles.button}>Like</Text>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => console.log('shared')}
      activeOpacity={0.85}
      underlayColor="blue"
    >
      <Text style={styles.button}>Share</Text>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => console.log('commented')}
      activeOpacity={0.85}
      underlayColor="blue"
    >
      <Text style={styles.button}>Comment</Text>
    </TouchableHighlight>
  </View>
);

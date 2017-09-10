import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../css/stylesheet';

export default class Comments extends React.Component {
  render() {
    return (
      <View>
        <Text>This TEXT is from /components/comments.js</Text>
        <View style={styles.child}>
          <Text style={styles.text1}>
            First
          </Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.text2}>
            Second
          </Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.text3}>
            Third
          </Text>
        </View>
      </View>
    );
  }
}

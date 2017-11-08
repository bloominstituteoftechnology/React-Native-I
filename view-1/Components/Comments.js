import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Buttons extends React.Component {
  render() {
    return (
      <View style={styles.comments}>
        <View style={styles.comment}>
          <Text style={styles.text}>
            User1: Comment comment comment comment.
          </Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>
            User2: I like turtles.
          </Text>
        </View>
        <View style={styles.comment}>
          <Text style={styles.text}>
            User3: Mhhm...I'll have some them french fried taters.
          </Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  comments: {
    flex: 4
  },
  comment: {
    borderWidth: 1,
    margin: 1
  },
  text: {
    padding: 5
  }
});
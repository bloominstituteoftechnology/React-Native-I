import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './PostStyleSheet';

const comments = [
  { key: 1, username: 'Bob', text: 'Sweet pic! A+' },
  { key: 2, username: 'Jane', text: 'Amazing!' },
  { key: 3, username: 'Jessica', text: 'Love it!!' },
  { key: 4, username: 'Lisa', text: 'so good!!!' },
  { key: 5, username: 'Sally', text: 'I woof it! 🐶' },
  { key: 6, username: 'Ida', text: '@Sally 🙄' },
  { key: 7, username: 'Joe', text: "Yo, check your DM's" },
  { key: 8, username: 'Becky', text: 'OMG' }
];

export default () => (
  <View style={styles.comments}>
    <FlatList
      data={comments}
      renderItem={({ item }) => (
        <View style={styles.comment}>
          <Text style={styles.username}>{item.username} </Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )}
    />
  </View>
);

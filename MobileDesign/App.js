import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, FlatList, List } from 'react-native';

import styles from './styles';

// import styles from './Styles/styles.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        { name: 'Bill', comment: 'Hey, nice beach!' },
        { name: 'Joe', comment: "Why wasn't I invited?" },
        { name: 'Trina', comment: 'I love that beach!' },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Header</Text>
        <Image style={styles.image} source={{ uri: 'https://loremflickr.com/320/240/brazil,rio' }} />
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => console.log('liked')}>
            <Text style={styles.button}>{'Like'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Share')}>
            <Text style={styles.button}>{'Share'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('comment')}>
            <Text style={styles.button}>{'Comment'}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.comments}
          renderItem={({ item, index }) => (
            <Text key={index} style={styles.comment}>{`${item.name}:${item.comment}`}</Text>
          )}
        />
      </View>
    );
  }
}

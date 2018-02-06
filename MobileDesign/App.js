import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

// import styles from './Styles/styles.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hi Mom</Text>

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
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>User 1: Hey great picture!</Text>
          </View>
        </View>
      </View>
    );
  }
}

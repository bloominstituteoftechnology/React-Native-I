import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import DogImage from './components/DogImage';
import Comments from './components/Comments';
import List from './components/List';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <DogImage />
        <List />
        <Comments />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Banner } from './components/Banner.js';
import { ContentBox } from './components/ContentBox.js';
import { Boxes } from './components/Boxes.js';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Banner />
        <ContentBox />
        <Boxes />
        <ContentBox />
        <Boxes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  }
});

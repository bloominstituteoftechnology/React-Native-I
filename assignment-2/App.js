import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Banner } from './components/Banner.js';
import { ContentBox } from './components/ContentBox.js';
import { Boxes } from './components/Boxes.js';
import { WordBox } from './components/WordBox.js';
export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Banner />
        <ContentBox />
        <Boxes />
        <WordBox />
        <ContentBox />
        <Boxes />
        <WordBox />
      </View>
      </ScrollView>
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

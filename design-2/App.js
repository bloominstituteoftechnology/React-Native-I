import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import Banner from './components/Banner';
import Section from './components/Section';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
        <Banner />
        <Section />
        <Section />
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

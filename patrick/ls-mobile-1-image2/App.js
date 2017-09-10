import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchBar from './components/searchbar';
import Banner from './components/banner';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <Banner />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'chocolate',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 20,
  },
});

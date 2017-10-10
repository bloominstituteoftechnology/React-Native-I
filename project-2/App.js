import React from 'react';
import { Text, View } from 'react-native';
import SearchBar from './SearchBar';
import Banner from './Banner';
import Midsection from './Midsection';
import Lowersection from './Lowersection';

const styles = require('./Styles');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <Banner />
        <Midsection />
        <Lowersection />
      </View>
    );
  }
}

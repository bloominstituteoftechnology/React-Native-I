import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Search = () => {
  return (
    <View style={searchBox}>
      <SearchBar placeholder={'Search here...'} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flex: 5,
    width: 300,
    height: 10,
  },
});

const { searchBox } = styles;

export default Search;

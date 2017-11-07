import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
  },
  item: {
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  selected: {
    backgroundColor:'#6495ED'
  }
});
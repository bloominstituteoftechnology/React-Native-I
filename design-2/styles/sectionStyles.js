import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 148, 
    height: 100,
    margin: 2
  },
  header: {
    fontSize: 25,
    alignSelf: 'flex-start',
    padding: 3
  },
  sectionContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  paragraph: {
    width: 300,
    borderWidth: 1,
    padding: 5
  }
});
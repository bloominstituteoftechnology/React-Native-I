import React from 'react';
import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#a8350b',
    alignSelf: 'stretch',
    paddingBottom: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  search: {
    width: 320,
    paddingLeft: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    textDecorationLine: 'none',
  },
  menu: {
    height: 30,
    width: 30,
  },
  banner: {
    height: 140,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'black'
  },
  bannerImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  section: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  sectionImageContainer: {
    height: 120,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  sectionImages: {
    flex: 1,
    margin: 2,
    resizeMode: 'cover',
    borderColor: 'black',
    borderWidth: 4,
  },
  sectionPara: {
    margin: 2,
    padding: 4,
    borderColor: 'black',
    borderWidth: 2
  },
  topbarSearch: {
    flexDirection: 'row'
  },
  searchImage: {
    height: 15,
    width: 15,
    right: 310,
    bottom: 8
  }
});
import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 80,
    alignSelf: 'stretch',
    justifyContent: 'center', 
    alignItems: 'center',
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 2
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  imageContainer: {
    height: 360,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 2
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  buttonsView: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  button: {
    borderColor: 'whitesmoke',
    borderWidth: 3,
    borderRadius: 0,
    backgroundColor: 'whitesmoke'
  },
  commentContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginTop: 10
  },
  commentHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 15,
    textDecorationLine: 'underline',
    textDecorationColor: 'black'
  },
  indComment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  user: {
   marginLeft: 15,
   marginRight: 5,
   fontWeight: 'bold'
  },
  comment: {
    flex: 1
    }
});
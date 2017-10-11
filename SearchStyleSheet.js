import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: width
  },

  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 75,
    width: width,
    top: 15
  },

  buttonContainer: {
    backgroundColor: 'white',
    marginLeft: 0,
    marginRight: -15,
    height: 50,
    width: width * 0.15
  },

  button: {
    backgroundColor: 'white',
    top: 7
  },

  searchBar: {
    borderTopColor: 'white',
    borderBottomColor: 'white',
    backgroundColor: 'white',
    height: 50,
    width: width * 0.88,
    padding: 0,
    margin: 0,
    top: 5
  },

  banner: {
    height: 100
  },

  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },

  image: {
    height: 100,
    width: width * 0.5
  },

  text: {
    padding: 10
  }
});

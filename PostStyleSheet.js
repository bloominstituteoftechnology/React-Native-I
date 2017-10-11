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
    justifyContent: 'space-between',
    height: 75,
    width: width
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20
  },

  search: {
    top: 38,
    right: 15,
    height: 20,
    width: 20
  },

  searchIcon: {
    height: 20,
    width: 20
  },

  photo: {
    width: width,
    height: width
  },

  buttons: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 7
  },

  button: {
    fontWeight: 'bold',
    borderRadius: 5,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15
  },

  comments: {
    flex: 1,
    marginTop: 7
  },

  comment: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderWidth: 0.5,
    flexDirection: 'row',
    borderColor: '#d6d7da',
    width: width
  },

  username: {
    fontWeight: 'bold'
  }
});

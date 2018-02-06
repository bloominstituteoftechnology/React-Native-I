import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topImage: {
    height: 400,
    alignSelf: 'stretch',
  },
  header: {
    marginTop: 25,
    fontSize: 50,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  button: {
    width: 62,
    height: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    overflow: 'hidden',
    textAlign: 'center',
    margin: 5,
  },
  commentContainer: {
    marginTop: 25,
  },
  comment: {
    fontSize: 20,
    marginBottom: 15,
  },
  image: {
    height: 400,
    alignItems: 'center',
    width: '95%',
  },
});

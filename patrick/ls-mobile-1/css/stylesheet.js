import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  header: {
    flex: 1,
    // height: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
  },

  display: {
    flex: 3,
  },

  buttons: {
    flex: 1,
    // height: 50,
    // width: 150,
    // marginBottom: 10,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',

  },

  comments: {
    flex: 1,
    // height: 50,
    // width: 150,
    // marginBottom: 10,
    backgroundColor: 'salmon',
    justifyContent: 'center',
  },

  buttonText: {
    padding: 5,
  },

  commentText: {

  },
});

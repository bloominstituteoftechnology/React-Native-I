import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'whitesmoke',
    marginTop: 20,
  },

  header: {
    flex: 1.5,
    backgroundColor: 'ivory',
    borderWidth: 1,
    borderColor: 'red',
  },

  display: {
    flex: 10,
    borderWidth: 1,
    borderColor: 'green',
  },

  buttonRow: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: 'hotpink',
    flexDirection: 'row'
  },

  buttons: {
    // flex: 1.5,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },

  comments: {
    flex: 6,
    backgroundColor: 'moccasin',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },

  comment: {
    flex: 1,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },

  buttonText: {
    // padding: 5,
    borderWidth: 1,
    borderColor: 'black'
  },

  commentText: {
    borderWidth: 1,
    borderColor: 'black'
  },
});

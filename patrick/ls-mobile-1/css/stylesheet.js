import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'chocolate',
    marginTop: 20,
  },

  header: {
    flex: 1.5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'ivory',
  },

  display: {
    flex: 10,
    borderWidth: 1,
    borderColor: 'green',
    // resizeMode: 'contain',
  },

  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'hotpink',
    backgroundColor: 'blue',
  },

  buttons: {
    // flex: 1.5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'green',
    paddingLeft: 5,
    paddingRight: 5,
  },

  buttonText: {
    // padding: 5,
    borderWidth: 1,
    borderColor: 'purple',
  },

  comments: {
    flex: 6,
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'moccasin',
    // paddingTop: 10,
  },

  comment: {
    // flex: 1,
    // alignSelf: 'flex-start',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'salmon',
    marginLeft: 5,
    marginRight: 5,
  },

  commentText: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
});

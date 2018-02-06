import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Button,
  comment,
} from 'react-native';

const Comments = () => {
    return (
        <View style={styles.commentContainer}>
          <Text style={styles.Comments}>blah blah blah</Text>
          <Text style={styles.Comments}>blah blah blah</Text>
          <Text style={styles.Comments}>blah blah blah</Text>
        </View>
      
    );
  }


const styles = StyleSheet.create({
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
  },
  button: {
    width: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    overflow: 'hidden',
  },
  commentContainer: {
    marginTop: 25,
  },
  comment: {
    fontSize: 20,
    marginBottom: 15,
  },
});

export default Comments;
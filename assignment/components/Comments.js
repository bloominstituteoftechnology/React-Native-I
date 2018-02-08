import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Comments = () => {
  return (
    <View style={commentContainer}>
      <TouchableOpacity style={comment} onPress={() => alert('Pressed')}>
        <Text style={commentText}>Some User: A comment on the picture.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={comment} onPress={() => alert('Pressed')}>
        <Text style={commentText}>Another User: A comment on the picture.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={comment} onPress={() => alert('Pressed')}>
        <Text style={commentText}>And Another User: A comment on the picture.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 8
  },
  comment: {
    height: 20,
    width: '100%',
    marginBottom: 4,
    borderWidth: 1,
    borderColor: 'black',
    // justifyContent: 'center'
  },
  commentText: {
    textAlign: 'left'
  }
});

const { commentContainer, comment, commentText } = styles;

export default Comments;

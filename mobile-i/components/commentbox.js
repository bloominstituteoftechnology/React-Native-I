import React, { Component } from 'react';
import { PostComment } from './postComment';
import { ScrollView, View } from 'react-native';

export default class CommentBox extends Component {
  render() {
    return (
      <ScrollView style={styles.commentsContainer}>
        <PostComment post={{username: 'Bob', comment: 'This is a comment'}} />
        <PostComment post={{username: 'Jake', comment: 'Yea its a comment'}} />
        <PostComment post={{username: 'Chris', comment: 'This is a comment'}} />
        <PostComment post={{username: 'Jason', comment: 'This is a comment'}} />

      </ScrollView>
    );
  }
};

const styles = {
  commentsContainer: {
    width: '98%',
    marginTop: '2%', 
    backgroundColor: 'white',
    paddingLeft: '2%',  
    paddingRight: '2%',
    paddingBottom: '2%', 
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5, 
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5
  }
}
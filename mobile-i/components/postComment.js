import React from 'react';
import { View, Text, Button } from 'react-native';

export const PostComment =  (props) => {
  addLike = () => {
    props.post.likes++;
  }
  return (
    <View style={styles.commentBox}>
      <View style={{backgroundColor: 'white', paddingLeft: '2%',}}>
        <Text>{props.post.username}</Text>
      </View>
      <Text>{props.post.comment}</Text>
    </View>
  );
};

const styles = {
  commentBox: {
    marginTop: '3%',
    backgroundColor: '#F4F6F7', 
    paddingTop: '2.5%', 
    paddingLeft: '2%', 
    paddingRight: '2%', 
    paddingBottom: '2%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderColor: '#D0D3D4',
    borderWidth: 2
  }
}
import React, { Component } from 'react';
import { View, Text, List, FlatList, ListItem, StyleSheet } from 'react-native';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          user: 'Joe',
          comment: 'Hey nice place',
        },
      ],
    };
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <FlatList data={this.state.comments} renderItem={({ item }) => <Text>{`${item.user}:${item.comment}`}</Text>} />
    );
  }
}

const styles = StyleSheet.create({
  comment: {
    textAlign: 'center',
  },
});

const { comment } = styles;

export default Comments;

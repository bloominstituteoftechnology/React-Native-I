import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


import ShowImage from './ShowImage'

export default class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        <ShowImage />
        {/* <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Like" />
          </View>
          <View style={styles.button}>
            <Button title="Like" />
          </View>
          <View style={styles.button}>
            <Button title="Comment" />
          </View>
        </View>
        <View style={styles.commentsWrapper}>
          <View style={styles.commentContainer}>
            <Text>Some User: Some Comment</Text>
          </View>
          <View style={styles.commentContainer}>
            <Text>Some User: Some Comment</Text>
          </View>
          <View style={styles.commentContainer}>
            <Text>Some User: Some Comment</Text>
          </View>
        </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 9,
    backgroundColor: 'green',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
  },
  button: {
    backgroundColor: 'white',
    marginRight: 2,
    borderColor: 'red'
  },
  commentsWrapper: {
    backgroundColor: 'red',
  },
  commentContainer: {
    backgroundColor: 'white',
    height: 50,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  }
})

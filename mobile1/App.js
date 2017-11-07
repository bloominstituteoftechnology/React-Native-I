import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

const Header = () => { return <Text style={styles.header}>Header</Text> };

const Comments = [
  {user: 'squeel', comment: 'cute!! totez amazing'},
  {user: 'sally', comment: 'prescient and prudent'},
  {user: 'bugs bunny', comment: 'meeeoowww!'}
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Ryan's World</Text>
        </View>
        <Image source={{ uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAz7AAAAJGU1ODcxMjU1LTJjYmItNGFmNy1hYWRiLWRlNzJiZDhkOTg1ZQ.jpg'}} style={styles.img} />
        <View style={styles.photoOptionsContainer}>
          <Button onPress={() => { Alert.alert('Like')}} title="Like" />
          <Button onPress={() => { Alert.alert('Share')}} title="Share" />
          <Button onPress={() => { Alert.alert('Comment')}} title="Comment" />
        </View>
        <View style={styles.comentContainer}>
          {Comments.map(((comment, i) => {
            return <Text style={styles.comment} key={i}>{comment.user}: {comment.comment}</Text>
          }))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    marginTop: '7%'
  },

  header: {
    height: '10%',
    width: '100%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    margin: 'auto'
  },

  headerText: {
    fontSize: 30,
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },

  img: {
    // width: '100%',
    // height: '100%'
    width: 290,
    height: 290
  },

  photoOptionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '8%'
  },

  commentContainer: {
    display: 'flex',
    // marginTop: '15%'
  },

  comment: {
    fontSize: 20,
    fontFamily: 'Cochin'
  }
});

// AppRegistry.registerComponent('mobile1', () => Bananas);
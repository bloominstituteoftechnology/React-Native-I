import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text h2>Cat Blog</Text>
        </View>

        <Image source={{uri: 'http://thecatapi.com/api/images/get?format=src&type=jpg'}}
        style={{width: 400, height: 400}} />

        <View style={styles.buttonsContainer}>
          <Button onPress={() => console.log('like')} title="Like" />
          <Button onPress={() => console.log('Share')} title="Share" />
          <Button onPress={() => console.log('Comment')} title="Comment" />
        </View>
        <View style={styles.commentsContainer}>
          <Text style={styles.comments}>Comment 1</Text>
          <Text style={styles.comments}>Comment 2</Text>
          <Text style={styles.comments}>Comment 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commentsContainer: {
    marginTop: 10,
    alignContent: 'stretch'
  },
  comments: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: 380,
    height: 40
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  header: {
    marginTop: 20,
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    borderWidth: 5,
    borderColor: 'black',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

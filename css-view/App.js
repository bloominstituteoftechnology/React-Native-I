import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Ph from './images/placeholder.js';

export default class App extends React.Component {
  state = {
    comments: [
      { key: 0, username: 'thomas', comment:'test'},
      { key: 1, username: 'jeff', comment: 'test2'},
    ],
    addComment: '',
  };
  emptyFunction = () => {};

  render() {
    let width;
    return (
      <View style={styles.container} onLayout={e => {width = e.nativeEvent.width} }>
        <View style={styles.header}>
          <Text style={styles.header__text}>Header</Text>
        </View>
        <Ph />
        <View style={styles.widthBox}>
          <View style={styles.buttonBox}>
            <Button onPress={this.emptyFunction} title='Like' />
            <Button onPress={this.emptyFunction} title='Comment' />
            <Button onPress={this.emptyFunction} title='Share' />
          </View>
        </View>
        <FlatList 
          data={this.state.comments}
          renderItem={({item}) => (
            <Text style={styles.comment}>{item.username}: {item.comment}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  header: {
    width: '100%',
    marginBottom: 30,
  },
  header__text: {
    fontSize: 30,
    textAlign: 'center',
  },
  placeholder: {
    aspectRatio: 1,
  },
  buttonBox: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-around',
  },
  widthBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  comment: {
    marginTop: 10,
    padding: 3,
    borderWidth: 1,
  }
});
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './Components/Header';
import Body from './Components/Body';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.header}></View>
        <View style={styles.container}>
          <Header />
          <Body />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 20,
    backgroundColor:'red',
  }
});

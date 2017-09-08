import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        {/* <Body /> */}
      </View>

      // example from the docs
      // View style={{flex: 1}}>
      //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

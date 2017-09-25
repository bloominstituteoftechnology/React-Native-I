import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/Header';
import Body from './src/Body';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Body /> 
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});

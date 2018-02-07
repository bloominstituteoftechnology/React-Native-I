import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header, ImageContainer, ButtonsWrapper, Comments } from './components/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ImageContainer />
        <ButtonsWrapper />
        <Comments />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

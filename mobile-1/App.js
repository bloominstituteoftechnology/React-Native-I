import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, ImageContainer, ButtonWrapper, Comments } from './components';
export default class App extends React.Component {
  render() {
    return (
      <View style={container}>
        <Header />
        <ImageContainer />
        <ButtonWrapper />
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

const { container } = styles;

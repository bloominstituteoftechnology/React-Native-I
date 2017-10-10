import React from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import Image from './Image';
import Buttons from './Buttons';
import Comments from './Comments';

const styles = require('./Styles.js');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Image />
        <Buttons />
        <Comments />
      </View>
    );
  }
}

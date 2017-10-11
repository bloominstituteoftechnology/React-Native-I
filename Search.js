import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import Header from './SearchHeader';
import Content from './SearchContent';
import styles from './SearchStyleSheet';

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Content />
      </View>
    );
  }
}

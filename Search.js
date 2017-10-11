import React from 'react';
import { View } from 'react-native';
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

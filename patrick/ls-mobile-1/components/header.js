import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { styles } from '../css/stylesheet'; // <~~~~ importing the CSS StyleSheet

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.ios_bar}>
        <Text>HEADER BAR</Text>
      </View>
    );
  }
}

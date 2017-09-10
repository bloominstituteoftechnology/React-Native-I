import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { styles } from '../css/stylesheet'; // <~~~~ importing the CSS StyleSheet

export default class Dupe extends React.Component {
  // constructor() { // not using right now, but just like React
  //   super();
  //   this.state = {
  //
  //   };
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text>This TEXT is from /components/design1.js</Text>
        <View style={styles.child}>
          <Text style={styles.text1}>
            First
          </Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.text2}>
            Second
          </Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.text3}>
            Third
          </Text>
        </View>
      </View>
    );
  }
}

// AppRegistry.registerComponent('Dupe', () => Dupe);

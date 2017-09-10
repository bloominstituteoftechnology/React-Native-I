import React from 'react';
// import Expo from 'expo'; // <~~~~~~ Do I need this????????
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './css/stylesheet'; // <~~~~ importing the CSS StyleSheet
import Dupe from './components/design1';
import Header from './components/header';

export default class App extends React.Component {
  // constructor() { // not using right now, but just like React
  //   super();
  //   this.state = {
  //
  //   };
  // }
  render() {
    console.log('Well, hello there!');
    return ( // the JSX is different than in React
      <View style={styles.container}>
        <Header />
        <Text>This TEXT is from App.js</Text>
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
        <Dupe />
      </View>
    );
  }
}

// Expo.registerRootComponent(App);

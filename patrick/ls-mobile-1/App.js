import React from 'react';
import Expo from 'expo'; // <~~~~~~ THIS
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './CSS/stylesheet'; // <~~~~ importing the CSS StyleSheet
import Dupe from './components/design1';

export default class App extends React.Component {
  // constructor() { // not using right now, but just like React
  //   super();
  //   this.state = {
  //
  //   };
  // }
  render() {
    console.log('Well, hello there!')
    // console.log(StyleSheet.create()); <~~~~ Look at the *.md files in node_modules/react-native/docs !!!
    return ( // the JSX is different than in React
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>This is totally cool!</Text>
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
        <Dupe /> {/* // <~~~~~~~~~~~~~~~~~~~~~~ see??? */}
      </View>
    );
  }
}

Expo.registerRootComponent(App);

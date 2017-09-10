import React from 'react';
// import Expo from 'expo'; // <~~~~~~ Do I need this????????
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './css/stylesheet'; // <~~~~ importing the CSS StyleSheet

import Header from './components/header';
// import Display from './components/display';
// import Buttons from './components/buttons';
import Comments from './components/comments';


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
        <Comments />
      </View>
    );
  }
}

// Expo.registerRootComponent(App);

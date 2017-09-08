import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() { // not using right now, but just like React
    super();
    this.state = {

    };
  }
  render() {
    console.log('Well, hello there!')
    return ( // the JSX is different than in React
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>This is totally cool!</Text> */}
        <View style={styles.child}>
          <Text style={styles.text1}>
            Like
          </Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.text2}>
            Share
          </Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.text3}>
            Comment
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  child: {
    height: 30,
    width: 75,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  text1: {
    textAlign: 'center',
  },
  text2: {
    textAlign: 'center',
  },
  text3: {
    textAlign: 'center',
  }
});

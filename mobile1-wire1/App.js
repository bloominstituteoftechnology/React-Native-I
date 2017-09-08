import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  handlePress() {
    alert("Pressed!");
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Text style={styles.header} >HEADER</Text>
        </View>
        <View style={styles.container}>
        </View>
        <View style={styles.follow}>
          <Button
            style={styles.butts}
            title="Like"
            color="grey"
            onPress={() => this.handlePress()}>
          </Button>
          <Button
            style={styles.butts}
            title="Share"
            color="grey"
            onPress={() => this.handlePress()}>
          </Button>
          <Button
            style={styles.butts}
            title="Comment"
            color="grey"
            onPress={() => this.handlePress()}>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    textAlign: 'center',
  },
  follow: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
  butts: {
    width: 25,
    flexDirection: 'row',
    flex: 1,
}
});

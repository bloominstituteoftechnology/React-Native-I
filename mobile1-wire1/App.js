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
          <Text style={styles.header}>Austigram</Text>
        </View>
        <View style={styles.container}>
          <Image source={require('./assets/austinAllredTalk.jpg')} />
        </View>
        <View style={styles.follow}>
          <View style={styles.buttoncontainer}>
            <Button
              style={styles.butts}
              title="Like"
              color="green"
              onPress={() => this.handlePress()}>
            </Button>
          </View>
          <View style={styles.buttoncontainer}>
            <Button
              style={styles.butts}
              title="Share"
              color="grey"
              onPress={() => this.handlePress()}>
            </Button>
          </View>
          <View style={styles.buttoncontainer}>
            <Button
              style={styles.butts}
              title="Comment"
              color="grey"
              onPress={() => this.handlePress()}>
            </Button>
          </View>
        </View>
        <Text>
        comment 1
        </Text>
        <Text>
        comment 2
        </Text>
        <Text>
        comment 3
        </Text>
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
    justifyContent: 'center',
    flexDirection: 'row',
  },
  butts: {
    width: 25,
    // flex: 1,
  },
  buttoncontainer: {
    marginVertical: 10,
    // flex: 1,
    // flexShrink: 2,
  }
});

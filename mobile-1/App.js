import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeader}>Monkeys!</Text>
        </View>
        <View style={styles.tabBar}>
        <Image source={require('./assets/Monkey1.png')} style={{width: 450, height: 400}} />
        <Button title="like" color="black"/>
        <Button title="Share" color="black"/>
        <Button title="Comment" color="black"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: 'blue',
  },
  navBarHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabBar: {
    flexDirection: 'row',
  }
});

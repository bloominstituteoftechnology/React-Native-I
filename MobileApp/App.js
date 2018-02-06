import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
  
      <View style={styles.container}>
        <Text> Header </Text>
        <Image source={require('/MobileApp/img/narwhal.jpeg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});

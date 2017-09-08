import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TextInput style={styles.searchbar} />
        </View>
        <Image 
          style={styles.banner}
          source={require('./assets/lambdaBanner.png')} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.whiteText}>Some Random Header</Text>
        </View>
        <View style={styles.flexImages}>
          <View style={styles.image}>
          </View>
          <View style={styles.image}>
          </View>
        </View>
        <Text style={styles.whiteText}>This is a bunch of smaller text that is giving information about the two images up above etc...</Text>
        <View style={styles.textContainer}>
          <Text style={styles.whiteText}>Some Random Header 2</Text>
        </View>
        <View style={styles.flexImages}>
          <View style={styles.image}>
          </View>
          <View style={styles.image}>
          </View>
        </View>
        <Text style={styles.whiteText}>This is a bunch of smaller text that is giving information about the two images up above etc...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    backgroundColor: 'grey',
    flex: 1
  },
  navbar: {
    flexDirection: 'row',
    flex: 1,
  },
  banner: {
    flex: 1,
    resizeMode: 'contain',
  },
  flexImages: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  flexImagesSize: {
  resizeMode: 'contain',
  },
  image: {
    backgroundColor: 'green',
    flex: 2,
    marginRight: 5,
  },
  whiteText: {
    color: '#FFF',
  },
});

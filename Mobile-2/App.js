import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import SearchBar from 'react-native-searchbar';
import Hamburger from 'react-native-hamburger';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hamContainer}>
          <Hamburger
            style={{
              position: 'absolute',
              left: 1,
              top: 10,
            }}
          />
        </View>
        <View style={styles.navContainer}>
          <SearchBar
            style={{}}
            ref={ref => (this.searchBar = ref)}
            showOnLoad
          />
        </View>
        <View style={styles.container1}>
          <Image source={require('./Images/pets_banner.png')} />
          <Text style={styles.header}>Cats and dogs!</Text>
          <View style={styles.imageContainer1}>
            <Image
              style={{ width: 150, height: 150 }}
              source={require('./Images/img1.jpg')}
            />
            <Image
              style={{ width: 150, height: 150 }}
              source={require('./Images/img2.jpg')}
            />
          </View>
          <Text style={styles.comment}>We love cats and dogs!</Text>

          <Text style={styles.header}>Kitties!</Text>
          <View style={styles.imageContainer2}>
            <Image
              style={{ width: 150, height: 150 }}
              source={require('./Images/img3.jpg')}
            />
            <Image
              style={{ width: 150, height: 150 }}
              source={require('./Images/img4.jpeg')}
            />
          </View>
          <Text style={styles.comment}>We love all kitty cats!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer1: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '60%',
    justifyContent: 'space-around',
  },
  imageContainer2: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '60%',
    justifyContent: 'space-around',
  },
  hamContainer: {
    position: 'absolute',
    width: 100,
    height: 100,
    position: 'absolute',
    left: 20,
    top: 20,
  },
  navContainer: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 60,
    top: 10,
  },
  header: {
    fontSize: 30,
    color: 'red',
  },
});

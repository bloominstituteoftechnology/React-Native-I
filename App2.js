import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SearchBar 
            lightTheme
            icon={{name: 'menu', color: 'black' }}
            placeholder='Search...'
            round={true}
            />
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.newsHeaderContainer}>
            <Text h3>Some Random Header</Text>
          </View>
          <View style={styles.newsImagesContainer}>
            <Image source={{uri: 'http://thecatapi.com/api/images/get?format=src&type=jpg'}}
              style={{width: 190, height: 200}} />
            <Image source={{uri: 'http://thecatapi.com/api/images/get?format=src&type=jpg'}}
              style={{width: 190, height: 200}} />
          </View>
          <View style={styles.newsContentContainer}>
            <Text>This is a bunch of smaller text that is giving information about the two
                    images up above. You might see this kind of a design on a news site. </Text>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.newsHeaderContainer}>
            <Text h3>Some Random Header</Text>
          </View>
          <View style={styles.newsImagesContainer}>
            <Image source={{uri: 'http://thecatapi.com/api/images/get?format=src&type=jpg'}}
              style={{width: 190, height: 200}} />
            <Image source={{uri: 'http://thecatapi.com/api/images/get?format=src&type=jpg'}}
              style={{width: 190, height: 200}} />
          </View>
          <View style={styles.newsContentContainer}>
            <Text>This is a bunch of smaller text that is giving information about the two
                    images up above. You might see this kind of a design on a news site. </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  header: {
    width: '100%'
  },
  newsContainer: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 2
  },
  newsHeaderContainer: {
    alignItems: 'center'
  },
  newsImagesContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10

  },
  newsContentContainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 2
  }
});
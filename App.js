import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, SearchBar } from 'react-native-elements';
import Tabs from './tabs';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Tabs>
      <View title='BLOG'>
        <View style={styles.headerApp}>
          <Text h2>Cat Blog</Text>
        </View>
        <Image source={{uri: 'http://thecatapi.com/api/images/get?format=src&type=jpg'}}
        style={{width: 400, height: 400}} />
        <View style={styles.buttonsContainer}>
          <Button onPress={() => console.log('like')} title="Like" />
          <Button onPress={() => console.log('Share')} title="Share" />
          <Button onPress={() => console.log('Comment')} title="Comment" />
        </View>
        <View style={styles.commentsContainer}>
          <Text style={styles.comments}>Comment 1</Text>
          <Text style={styles.comments}>Comment 2</Text>
          <Text style={styles.comments}>Comment 3</Text>
        </View>
      </View>
      <View title='NEWS'>
        <View style={styles.headerNews}>
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
      </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'black'
  },
  commentsContainer: {
    marginTop: 10,
    alignContent: 'stretch'
  },
  comments: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: 380,
    height: 40
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  },
  headerApp: {
    marginTop: 20,
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerNews: {
    width: '100%',
    marginTop: 10
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
  },
  container: {
    borderWidth: 5,
    paddingTop: 10,
    borderColor: 'black',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

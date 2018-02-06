import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const DesignI = require('./DesignI');
const DesignII = require('./DesignII');
const mountain = require('./images/mountain.jpg');
const sentinelDome = require('./images/sentinelDome.jpg');
import Comments from './Comments.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={container}>
        <Text style={headerText}>Instagraham</Text>
        <Image style={bannerImage} source={sentinelDome} />
        <Comments />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    flex: 4,
    height: 100,
    width: 800,
  },
  headerText: {
    fontSize: 24,
    paddingTop: '10%',
  },
});

const { container, bannerImage, headerText } = styles;
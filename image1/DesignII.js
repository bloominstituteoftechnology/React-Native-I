import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const mountain = require('./images/mountain.jpg');
const sentinelDome = require('./images/sentinelDome.jpg');

export default class DesignII extends React.Component {
  render() {
    return (
      <View style={container}>
        <Image style={bannerImage} source={mountain} />
        <Text style={headerText}>Some Random Header</Text>
        <View style={imageHalfScreen}>
          <Image style={imageHalfScreenLeft} source={mountain} />
          <Image style={imageHalfScreenRight} source={mountain} />
        </View>
        <Text style={textBox}>This is a bunch of smaller text that is giving information about the two images up above. You might see this kind of a design on a news site.</Text>
        <Text style={headerText}>Some Random Header</Text>
        <View style={imageHalfScreen}>
          <Image style={imageHalfScreenLeft} source={mountain} />
          <Image style={imageHalfScreenRight} source={mountain} />
        </View>
        <Text style={textBox}>This is a bunch of smaller text that is giving information about the two images up above. You might see this kind of a design on a news site.</Text>
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
  bannerImage: {
    flex: 1,
    height: 100,
    width: 800,
  },
  headerText: {
    flex: 1,
    fontSize: 24,
  },
  imageHalfScreen: {
    flexDirection: 'row',
  },
  imageHalfScreenLeft: {
    flex: 1,
    height: 100,
    width: 100,
  },
  imageHalfScreenRight: {
    flex: 1,
    height: 100,
    width: 100,
  },
  textBox: {
    margin: 5,
    padding: 5,
    justifyContent: 'flex-start',
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 0.5,
  }
});

const { container, bannerImage, headerText, imageHalfScreen, imageHalfScreenLeft, imageHalfScreenRight ,textBox } = styles;
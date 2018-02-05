import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const mountain = require('./images/mountain.jpg');

export default class DesignI extends React.Component {
  render() {
    return (
      <View style={container}>
        <Text style={headerText}>Some Random Header</Text>
        <Image style={bannerImage} source={mountain} />
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

const { container, bannerImage, headerText } = styles;
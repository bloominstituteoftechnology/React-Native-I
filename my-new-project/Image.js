import React from 'react';
import { Image, View } from 'react-native';

const styles = require('./Styles.js');

export default () => (
  <View style={styles.imageContainer}>
  <Image
    style={styles.image}
    source={{uri: 'http://i.huffpost.com/gen/1719761/images/o-COOL-CAT-facebook.jpg'}}
  />
  </View>
)
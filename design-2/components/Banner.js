import React from 'react';
import { Image } from 'react-native';

const styles = require('../styles/bannerStyles.js');

export default () => (
  <Image
    source={require('../assets/dog.jpg')}
    style={styles.image}
  />
);

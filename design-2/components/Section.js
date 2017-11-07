import React from 'react';
import { View, Text, Image } from 'react-native';

const styles = require('../styles/sectionStyles.js');

export default () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.header}>Some Random Header</Text>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/dog.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../assets/dog.jpg')}
        style={styles.image}
      />
    </View>
    <Text style={styles.paragraph}>This is a bunch of smaller text that is giving information about the two images above. You might see this kind of design on a news site.</Text>
  </View>
);
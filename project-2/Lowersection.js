import React from 'react';
import { View, Image, Text } from 'react-native';

const styles = require('./Styles');

export default () => (
  <View style={styles.section}>
    <Text style={styles.sectionHeader}>Dragon Ball Super</Text>
    <View style={styles.sectionImageContainer}>
      <Image
        style={styles.sectionImages}
        source={{ uri: 'https://images.alphacoders.com/764/thumb-1920-764254.png' }}
      />
      <Image
        style={styles.sectionImages}
        source={{uri: 'https://images4.alphacoders.com/652/652775.png' }}
      />
    </View>
    <Text style={styles.sectionPara}>Dragon Ball Super is an ongoing Japanese anime television series produced by Toei Animation that began airing on July 5, 2015. 
    </Text>
  </View>
)
import React from 'react';
import { View, Image } from 'react-native';

const styles = require('./Styles');


export default () => (
  <View style={styles.banner}>
    <Image style={styles.bannerImage} source={{ uri: 'https://images.alphacoders.com/606/thumb-1920-606210.jpg' }} />
  </View>
)
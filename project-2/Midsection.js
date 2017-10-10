import React from 'react';
import { View, Image, Text } from 'react-native';

const styles = require('./Styles');

export default () => (
  <View style={styles.section}>
    <Text style={styles.sectionHeader}>Dragon Ball Z</Text>
    <View style={styles.sectionImageContainer}>
      <Image
        style={styles.sectionImages}
        source={{ uri: 'https://images4.alphacoders.com/593/thumb-1920-593280.jpg' }}
      />
      <Image
        style={styles.sectionImages}
        source={{uri: 'https://images4.alphacoders.com/610/thumb-1920-610770.png' }}
      />
    </View>
    <Text style={styles.sectionPara}>The adventures of a powerful warrior named Goku, his son, Gohan, and their allies, who all push themselves to the limit to defend Earth from threats, occasionally aided by a dragon who grants the wishes of whoever gathers the seven Dragon Balls.
    </Text>
  </View>
)
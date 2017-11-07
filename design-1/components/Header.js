import React from 'react';
import { Text, View} from 'react-native';

const styles = require('../styles/headerStyles.js');

export default () => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>
      Doggos
    </Text>
  </View>
)
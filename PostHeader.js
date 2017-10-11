import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import styles from './PostStyleSheet';

export default props => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.header}>
      <View style={{ width: 27 }} />
      <Text style={styles.title}>Some Cool App</Text>
      <TouchableHighlight
        onPress={() => navigate('Search')}
        activeOpacity={0.85}
        underlayColor="blue"
        style={styles.search}
      >
        <Image
          source={require('./assets/search.png')}
          resizeMode="contain"
          style={styles.searchIcon}
        />
      </TouchableHighlight>
    </View>
  );
};

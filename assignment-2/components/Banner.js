import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={imageWrapper}>
      <Image
        style={imageProper}
        source={{ uri: 'http://via.placeholder.com/350x150.png' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    height: 150,
    width: '100%',
    paddingTop: 36,
    padding: 8
  },
  imageProper: {
    height: '100%',
    width: '100%'
  }
});

const { imageWrapper, imageProper } = styles;
export { Banner };
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BannerImageContainer = () => {
  return (
    <View style={imageContainer}>
      <Image style={imageProper} source={{ uri: 'https://www.visitscotland.com/cms-images/about/fairy-pools-skye' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: 'red',
  },
  imageProper: {
    height: '100%',
  },
});

const { imageContainer, imageProper } = styles;

export default BannerImageContainer;

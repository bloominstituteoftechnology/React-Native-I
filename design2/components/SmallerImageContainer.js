import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SmallerImageContainer = () => {
  return (
    <View style={imageContainer}>
      <Image style={imageProper} source={{ uri: 'https://www.visitscotland.com/cms-images/about/fairy-pools-skye' }} />
      <Image style={imageProper} source={{ uri: 'https://www.visitscotland.com/cms-images/about/fairy-pools-skye' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 200,
  },
  imageProper: {
    flex: 1,
    height: '100%',
  },
});

const { imageContainer, imageProper } = styles;

export default SmallerImageContainer;

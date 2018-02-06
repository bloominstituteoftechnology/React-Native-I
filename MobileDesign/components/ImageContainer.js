import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageContainer = () => {
  return (
    <View style={imageWrapper}>
      <Image style={imageProper} source={{ uri: 'https://www.visitscotland.com/cms-images/about/fairy-pools-skye' }} />
    </View>
  );
};
src = 'https://www.visitscotland.com/cms-images/about/fairy-pools-skye?view=Standard';
const styles = StyleSheet.create({
  imageWrapper: {
    borderWidth: 1,
    borderColor: 'green',
    height: 300,
  },
  imageProper: {
    height: '100%',
  },
});

const { imageWrapper, imageProper } = styles;

export default ImageContainer;

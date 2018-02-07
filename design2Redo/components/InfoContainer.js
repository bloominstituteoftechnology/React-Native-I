import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoContainer = () => {
  return (
    <View>
      <Text style={info}>
        Just a bunch of random info about the random pictures below the random header. This is a world full of
        randomness.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    fontSize: 16,
  },
});

const { info } = styles;

export default InfoContainer;

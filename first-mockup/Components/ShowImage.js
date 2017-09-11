import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class ShowImage extends Component {
  render() {
    return (
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: .5,
  }
})

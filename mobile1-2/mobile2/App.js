import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BannerImage from './Components/bannerImage';
import HeaderOne from './Components/headerOne';
import ImageBoxA from './Components/imageBoxA';
import BlurbOne from './Components/blurbOne';
import HeaderTwo from './Components/headerTwo';
import ImageBoxB from './Components/imageBoxB';
import BlurbTwo from './Components/blurbTwo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BannerImage/>
        <HeaderOne/>
        <ImageBoxA/>
        <BlurbOne/>
        <HeaderTwo/>
        <ImageBoxB/>
        <BlurbTwo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

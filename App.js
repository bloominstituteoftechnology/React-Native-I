import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { TokyoHeader, TokyoImageContainer, TokyoButtonsWrapper, TokyoComments } from './Components/TokyoPage/TokyoIndex';
import { JapanHeader, JapanBannerImage, TokyoSubHeader, TokyoSubImages, TokyoSubDescription, KyotoSubHeader, KyotoSubImages, KyotoSubDescription } from './Components/JapanPage/JapanIndex';


export default class App extends React.Component {
  render() {
    return (
      // <View style={container}>
      //   <TokyoHeader />
      //   <TokyoImageContainer />
      //   <TokyoButtonsWrapper />
      //   <TokyoComments />
      // </View>
      <ScrollView style={container}>
        <JapanHeader />
        <JapanBannerImage />
        <TokyoSubHeader />
        <TokyoSubImages />
        <TokyoSubDescription />
        <KyotoSubHeader />
        <KyotoSubImages />
        <KyotoSubDescription />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const { container } = styles;
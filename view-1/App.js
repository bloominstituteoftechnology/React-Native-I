import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Buttons from './Components/Buttons';
import Comments from './Components/Comments';
import Header from './Components/Header';

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {<Header />}
        <Image style={styles.image} source={{uri: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg'}} />
        <Buttons />
        <Comments />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  image: {
    height: height / 2,
    width
  }
});

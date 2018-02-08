import React from 'react';
import { StyleSheet, View} from 'react-native';

import Header from './Components/header';
import ImageCake from './Components/image';
import Buttons from './Components/buttons';

export default class App extends React.Component {


  render() {
    return (
      <View style={container}>
      <Header/>
      <ImageCake/>
      <Buttons/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const { container } = styles;
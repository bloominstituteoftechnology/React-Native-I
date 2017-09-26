import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import TopBar from './src/TopBar';
import TopComponent from './src/TopComponent';
import BottomComponent from './src/BottomComponent';


export default class App extends React.Component {
  render() {
    let image = {
      uri: 'http://engrpros.com/uploads/3/4/6/1/34615695/883899_orig.jpg'
    };
    return (
      <ScrollView>
        <View style={styles.container}>
          <TopBar/>
          <Image source={image} style={styles.image} resizeMode='cover'/>
          <TopComponent />
          <BottomComponent /> 
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 180,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});

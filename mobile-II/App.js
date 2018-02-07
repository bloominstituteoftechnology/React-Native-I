import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstImageAndSearchBar}>
         <View style={styles.imageContainer}>
            <Image source={require('./design/menu-alt-256.png')} style={styles.image} resizeMethod={'auto'} />
         </View>
         <View style={styles.searchBar}>
            <Text>search                                                                                   </Text>
         </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
     
  },
  image:{
    width: 30,
    height: 30
  },
  imageContainer: {
    flex: 0,
    backgroundColor: 'white',
    alignItems: 'flex-start'
  },
  searchBar: {
    borderColor: 'black',
    borderRadius: 30,
    borderStyle: 'solid',
    borderWidth: 2
  },
  firstImageAndSearchBar: {
    flex: 0,
    flexDirection: 'row'
  }
});

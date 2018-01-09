import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native';

export default class App extends React.Component {

  setColor = () => {
    styles.likeButton.backgroundColor = "red";
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>This is a header!</Text>
        <Image 
          style={styles.morita}
          source={{uri: 'https://i.imgur.com/9MerlpR.jpg'}}
        ></Image>
        <Button
          style={styles.likeButton}
          onPress={() => this.setColor()}
          title="Like"
        ></Button>
        {/* <Button></Button>
        <Button></Button>
        <FlatList></FlatList> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 20,
    fontSize: 20
  },
  morita: {
    height: 300,
    width: 300,
    paddingBottom: 20
  },
  likeButton: {
    backgroundColor: "white",
    width: 60,
    paddingTop: 20,
    borderColor: "black",
    borderWidth: 2
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

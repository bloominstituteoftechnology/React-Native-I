import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';
let {height, width} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
        <Image source={require('./Assets/icon1.png')} style={styles.icons}/>
        <TextInput style={styles.textBox} underlineColorAndroid='transparent' placeholder='search' inlineImageLeft = 'src/Assets/icon2.png'/>
        </View>
        <Image source={require('./Assets/cat1.jpg')} style={styles.photos}/>
        <Text style={styles.header}>Random Cat Facts</Text>
        <View style={styles.imageContainer}>
          <Image source={require('./Assets/cat2.jpg')} style={styles.smallPhotos}/>
          <Image source={require('./Assets/cat6.jpg')} style={styles.smallPhotos}/>
        </View>
        <Text style={styles.texts}>Unlike dogs, cats do not have a sweet tooth. 
          Scientists believe this is due to a mutation in a key taste receptor. 
          When a cat chases its prey, it keeps its head level. Dogs and humans bob 
          their heads up and down. Cats are North America’s most popular pets: 
          there are 73 million cats compared to 63 million dogs. Over 30% of 
          households in North America own a cat.
        </Text>
        <Text style={styles.header}>More Cat Facts</Text>
        <View style={styles.imageContainer}>
          <Image source={require('./Assets/cat4.jpeg')} style={styles.smallPhotos}/>
          <Image source={require('./Assets/cat5.jpg')} style={styles.smallPhotos}/>
        </View>
        <Text style={styles.texts}>A cat can travel at a top speed of approximately 
        31 mph (49 km) over a short distance. Most cats give birth to a litter of 
        between one and nine kittens. The largest known litter ever produced was 
        19 kittens, of which 15 survived. Cats have 32 muscles that control the outer 
        ear (humans have only 6). A cat can independently rotate its ears 180 degrees.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  navContainer: {
    flexDirection:'row',
  },
  textBox: {
    borderColor: 'black',
    backgroundColor: 'beige',
    borderWidth: 1,
    paddingLeft: 3,
    paddingRight: 3,
    height: 35,
    width: 350,
    marginTop: 30,
    marginBottom:5,
    marginLeft:15,
    borderRadius: 5
  },
  icons: {
    height:35,
    width:35,
    marginTop: 30,
    marginLeft: 5
  },
  photos: {
    height: 150,
    width: width
  },
  imageContainer:{
    flexDirection: 'row'
  },
  texts: {
    borderBottomWidth: 1/2,
    borderLeftWidth:1/2,
    borderRightWidth: 1/2,
    borderColor: 'black',
    paddingLeft:5,
    paddingRight: 5,
  },
  header:{
    textAlign: 'center',   
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  smallPhotos: {
    height: 100,
    width: width/2,
    borderWidth:1/2,

    borderColor: 'black',
  }
});

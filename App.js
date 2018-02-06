import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';



export default class DisplayAnImage extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenPressed: false,
    };
  }

  handlePress = () => {
    this.setState = {
      hasBeenPressed: true,
    };
  };




  render() {

    return (
      < View >
        <View style={styles.header}>
          <View style={{ marginVertical: 15 }}>
            <Text style={styles.headerText}> Eats! </Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://4.bp.blogspot.com/-QnOcALNBJyQ/WmFwfQ-ZDaI/AAAAAAAACkg/ENdrUGbp4aMlc34YDbl8xPcIifsvkTshACLcBGAs/s1600/blueberrystuffedcrunchfrenchtoast.jpg' }}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handlePress} underlayColor='gray'>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handlePress} underlayColor='gray'>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handlePress} underlayColor='gray'>
          <Text>Login</Text>
        </TouchableOpacity>

        <View style={styles.comments}>
          <Text style={styles.commment}>user1: That looks great!</Text>
          <Text style={styles.commment}>user2: Yummy</Text>
          <Text style={styles.commment}>user1: Is that french toast?</Text>
        </View>

      </View >
    );
  }
}
const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: '#eee8aa',
  },
  headerText: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: '#556b2f'
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#eee8aa'
  },
  imageContainer: {
    width: 350,
  },
  image: {
    alignItems: 'center',
    width: 375,
    height: 375,
  },
  comments: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 50,
    marginHorizontal: 20
  },
  comment: {
    marginTop: 15
  }
});


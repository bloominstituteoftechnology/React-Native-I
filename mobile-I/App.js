import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     clickCount: 0
  //   };
  // }
  /*handleClickCount = () = {
    const count = this.state.clickCount;
    this.setState({
      clickCount: count + 1
    })
    console.log(clickcount);
  }*/
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Header</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source= {require('./designs/space.jpg')} style={styles.image} />
        </View>
        <View style={styles.buttonStyle}>
          <Button title='like' onPress={() => {}} />
          <Button title='share' onPress={() => {}} />
          <Button title='comment' onPress={() => {}} />
        </View>
        <View>
          <View style={styles.commentStyle}>
            <Text>Some user: a comment on the picture</Text>
          </View>
          <View style={styles.commentStyle}>
            <Text>Another user: A comment on the picture</Text>
          </View>
          <View style={styles.commentStyle}>
            <Text>And Another User: A comment on the picture</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    fontSize: 30,
    color: 'black',
  },

  headerContainer: {
    flex: 0,
    height: 80,
  },
  imageContainer: {
    flex: 0,
    height: '40%'
  },
  image: {
    height: '100%'
  },
  buttonStyle: {
    flex: 0,
    flexDirection: 'row'   
  },
  commentStyle: {
    flex: 0,
    borderWidth: 1,
    borderColor: 'black',
    padding: 4,
    margin: 4
  },
  ViewStyle: {

  }
});

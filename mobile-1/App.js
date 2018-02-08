import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M101_hires_STScI-PRC2006-10a.jpg/1280px-M101_hires_STScI-PRC2006-10a.jpg'
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text>Galaxy!</Text>
        </View>
        <Image source={pic} style={{width: '100%', height: 300}}/>
        <View style={styles.button}>
          <Button style={styles.likeButton} title='Like'>Like</Button>
          <Button style={styles.shareButton} title='Share'>Share</Button>
          <Button style={styles.commentButton} title='Comment'>Comment</Button>
        </View>
        <View style={styles.comments}>
          <Text style={styles.commentItem}>Awesome Picture!</Text>
          <Text style={styles.commentItem}>I can see my house from here!</Text>
          <Text style={styles.commentItem}>Almost as big as your mom</Text>
        </View>
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
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#000000',
    fontSize: 40,
    backgroundColor: 'skyblue'
  },
  button: {
    margin: 5,
    height: 45,
    width: '100%',
    backgroundColor: 'beige',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  // commments: {
  //   flex: 1,
  //   backgroundColor: 'grey',
  //   flexDirection: 'row',
  //   alignContent: 'space-around',
  // },
  commentItem: {
    display: 'flex',
    backgroundColor: 'beige',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#000000',
  }
});

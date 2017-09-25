import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Buttons from './Buttons';
import CommentList from './CommentList';

class Body extends Component {
    render() {
        let image = {
            uri: 'https://ak3.picdn.net/shutterstock/videos/14159573/thumb/1.jpg'
        };
        return (
            <View style={styles.container}>
                <Image source={image} style={styles.image}/>
                <Buttons />
                <CommentList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  image: {
    width: 300, 
    height: 280,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'transparent',
  },
  container: {
    flex: 8,
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: '#d6d7da',
  },
});

export default Body;
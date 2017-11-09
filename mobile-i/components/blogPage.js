import React, { Component } from 'react';
import { StyleSheet, TextInput, ScrollView, Image, Platform, View, Text } from 'react-native';
import lambdaLogo from '../assets/lambdawhite.png';

export default class BlogExample extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: (Platform.OS === 'ios') ? 'white' : 'black',
      height: (Platform.OS === 'ios') ? 80 : 25,
    }
   }
  render() {
    return (
      <View>
        <View style={{width: '100%', backgroundColor: 'blue'}}>
          <View style={styles.navBar}>
            <TextInput style={styles.searchBar} underlineColorAndroid="transparent"/>
          </View>
        </View>
        <View style={{ display: 'flex', flex: 1,  width: '100%',  alignItems: 'center', height: 300, justifyContent: 'center', backgroundColor: '#5DADE2'}} >
          <Image source={lambdaLogo} style={{width: '90%', height: '70%', margin: 5}} />
          <View style={{width: '100%', height: 30, backgroundColor: '#34495E'}}/>
        </View>
        <ScrollView >
          <View style={styles.blogImgContainer}>
            <Image />
            <Image />
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  navBar: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#1B2631'
  },
  blogImgContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: 100,
    backgroundColor: 'green'
  },
  searchBar: {
    backgroundColor: '#5D6D7E',
    width: '80%',
    fontSize: 20,
    paddingLeft: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderLeftColor: 'black',
    borderLeftWidth: 2,
    borderTopColor: 'black',
    borderTopWidth: 2,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
});
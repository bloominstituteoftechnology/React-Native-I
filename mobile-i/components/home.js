import React, { Component } from 'react';
import { Platform, Button, TouchableOpacity, StyleSheet, Text, ScrollView , View } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: (Platform.OS === 'ios') ? 'white' : 'black',
      height: (Platform.OS === 'ios') ? 80 : 25,
    }
   }
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={{display: 'flex', flex: 1, height: "100%", width: '100%'}}>
        <TouchableOpacity style={styles.categoryBox} onPress={() => navigate('Post')}>
          <Text style={styles.categoryName}  >POST EXAMPLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox} onPress={() => navigate('Blog')}>
        <Text style={styles.categoryName}>BLOG POSTS EXAMPLES</Text>
        </TouchableOpacity>
      </View>

    );
  }
};

const styles = StyleSheet.create({
  categoryBox:{
    width: '100%',
    height: '50%',
    backgroundColor: '#5D6D7E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  categoryName: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    fontSize: 20, 
    color: 'white',
    fontWeight: 'bold'
  }
});
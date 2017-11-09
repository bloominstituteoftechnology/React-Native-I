import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class LikeBar extends Component {
  displayBtn = (name) => {
    alert(name);
  }
  render() {
    return (
      <View style={styles.controlContainer} >
        <View style={styles.controlBar}>
        <Button title="Like" color="#797D7F" onPress={() => this.displayBtn('Like')}/>
        <Button title="Comment" color="#797D7F" onPress={() => this.displayBtn('Comment')} />
        <Button title="Share" color="#797D7F" style={{color: 'red'}} onPress={() => this.displayBtn('Share')}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  controlContainer: {
    width: '100%', 
    height: '7%',
    backgroundColor: 'whitesmoke', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  controlBar: {
    width: '70%',
    height: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  }
});
import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  Text, 
  Image, 
  Button
} from 'react-native';

class DesignTwo extends Component {
  render() {
    return (
      <ScrollView>
        <View style={ styles.view }>
        
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
});

export default DesignTwo;

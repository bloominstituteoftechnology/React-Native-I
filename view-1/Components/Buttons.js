import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default class Buttons extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <Button 
          color="#841584"
          title="Like"
          onPress={() => console.log('Liked')} />
        <Button 
          onPress={() => console.log('Liked')}
          title="Share" />
        <Button
          onPress={() => console.log('Liked')}
          title="Comment" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
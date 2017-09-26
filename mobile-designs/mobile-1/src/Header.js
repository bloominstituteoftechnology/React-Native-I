import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name='menu' color='#fff' style={{marginRight:10}}/> 
                <Text style={styles.headerText}>MOBILE-1</Text>
                <Icon name='settings' color='#fff' style={{marginRight:10}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  headerText: {
    flex:1,
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 20, 
    fontWeight: 'bold',
  },
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#212121',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: '#d6d7da',
  },
});

export default Header;


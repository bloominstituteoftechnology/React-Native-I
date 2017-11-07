import React from 'react';
import { SearchBar, Icon } from 'react-native-elements';
import { View } from 'react-native';

const styles = require('../styles/searchStyles.js');

export default () => (
  <View style={styles.container}>
    <Icon name='menu' iconStyle={{padding: 10}}/>
    <SearchBar placeholder='Search' inputStyle={{width:240, backgroundColor:'white', borderWidth: 1}} containerStyle={{backgroundColor:'white'}} round lightTheme/>
  </View>
);
import React from 'react';
import { View, TextInput, Image } from 'react-native';
import Menu from 'material-ui-icons/Menu';

const styles = require('./Styles');

export default () => (
  <View style={styles.topbar}>
    <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' }} style={styles.menu}/>
    <View style={styles.topbarSearch}>
    <TextInput 
    keyboardType='web-search'
    returnKeyType='search'
    inlineImageLeft='stretched-30-30-652877'
    placeholder='Search'
    underlineColorAndroid='rgba(0,0,0,0)'
    style={styles.search} />
    </View>
    <Image source={{ uri: 'https://images7.alphacoders.com/652/652877.png' }} style={styles.searchImage}/>

  </View>
)
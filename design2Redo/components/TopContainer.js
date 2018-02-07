import React from 'react';
import { View, StyleSheet } from 'react-native';

import Search from './Search';
import Menu from './Menu';

const TopContainer = () => {
  return (
    <View style={container}>
      <Menu style={menu} />
      <Search style={search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  menu: {
    flex: 1,
  },
  search: {
    flex: 5,
  },
});

const { menu, search, container } = styles;

export default TopContainer;

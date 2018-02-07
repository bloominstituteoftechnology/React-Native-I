import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Hamburger from 'react-native-hamburger';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      activeMenu: false,
    };
  }

  render() {
    return (
      <View style={container}>
        <Hamburger
          action={this.state.activeMenu}
          type="spinArrow"
          onPress={() => this.setState({ activeMenu: !this.state.activeMenu })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const { container } = styles;

export default Menu;

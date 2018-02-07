import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Hamburger from 'react-native-hamburger';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <View style={container}>
        <Hamburger
          active={this.state.active}
          type="cross"
          onPress={() => this.setState({ active: !this.state.active })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const { container } = styles;

export default Menu;

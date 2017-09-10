import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class SearchBar extends React.Component {
  state = {
    inputValue: "You can change me!"
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <View style={styles.searchbar}>
        <TextInput
           value={this.state.inputValue}
           onChangeText={this._handleTextChange}
           style={{ width: 200, height: 44, padding: 8 }}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchbar: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'pink',
  },
});

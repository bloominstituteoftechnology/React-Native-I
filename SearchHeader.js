import React from 'react';
import { View } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import styles from './SearchStyleSheet';

export default props => {
  const { goBack } = props.navigation;

  return (
    <View style={styles.header}>
      <Button
        onPress={() => goBack()}
        icon={{ name: 'menu', color: 'black' }}
        containerViewStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
      <SearchBar lightTheme containerStyle={styles.searchBar} />
    </View>
  );
};

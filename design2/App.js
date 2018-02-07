import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { TopContainer, Header, BannerImageContainer, SmallerImageContainer, InfoContainer } from './components/index';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
        <TopContainer />
        <BannerImageContainer />
        <Header />
        <SmallerImageContainer />
        <InfoContainer />
        <Header />
        <SmallerImageContainer />
        <InfoContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    marginTop: 22,
  },
});

import React from 'react';
import { Text, View } from 'react-native';
import Post from './components/Post/Post'
import {container} from './AppStyle';

export default class App extends React.Component {
  render() {
    return (
      <View style={container}>
        <Post />
      </View>
    );
  }
}

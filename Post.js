import React from 'react';
import { Image, View } from 'react-native';
import Header from './PostHeader';
import Buttons from './PostButtons';
import Comments from './PostComments';
import styles from './PostStyleSheet';

export default class Post extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Material Icons': require('./assets/MaterialIcons.ttf')
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Image
          source={require('./assets/image.png')}
          resizeMode="contain"
          style={styles.photo}
        />
        <Buttons />
        <Comments />
      </View>
    );
  }
}

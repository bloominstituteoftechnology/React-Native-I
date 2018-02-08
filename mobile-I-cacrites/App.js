import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Button
} from 'react-native';

//switch these 2 statements - comment out 1, uncomment the other, and change the <image/> in the render to the appropriate name.
import FirstImage from './firstImage.js'; 
// import SecondImage from './secondImage.js';

export default class App extends React.Component {
  render() {
    return (
        <FirstImage/> //replace this line with <FirstImage/> to swap app layouts
    );
  }
}


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textFont:{
      fontSize:50
    }
  });
  
  const {container,textFont} = styles;

  module.exports = {
    container,
    textFont
  }
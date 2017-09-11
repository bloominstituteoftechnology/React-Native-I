// known 'features' header text is not center aligned, textAlign : 'center' does not seem to work. am looking at it
//                  bigger issue : comments are not showing up as rows. Asked for help on Cs1 help. 

import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>header !</Text>
        </View>
        <View style={styles.image}>
          <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
          />
        </View>
        <View style={styles.likeShareCommentButtons}>
          <Button onPress={()=> console.log('hello')} title="like" color="#841584"
           accessibilityLabel="Learn more about this purple button"/>
          <Button onPress={()=> console.log('hello')} title="share" color="#841584"
           accessibilityLabel="Learn more about this purple button"/>
           <Button onPress={()=> console.log('hello')} title="comment" color="#841584"
            accessibilityLabel="Learn more about this purple button"/>
        </View>
        <View style={styles.comments}>
          <View style={styles.comment}><Text style={styles.text}>comment a</Text></View>
          <View style={styles.comment}><Text style={styles.text}>comment b</Text></View>
          <View style={styles.comment}><Text style={styles.text}>comment c</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  header:{
    flex: 2,
    marginTop : 30,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  image: {
    flex: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  likeShareCommentButtons:{
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
  },
  comments:{
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  comment: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
    borderColor: 'white',
  }
});

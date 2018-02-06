import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableHighlight } from 'react-native';
// import DesignI from './DesignI';
// import DesignII from './DesignII';
export default class DesignI extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
        <Image 
          style={{height: '50%', marginTop: 20, marginBottom: 5}}
          source={require('./assets/react-logo.png')} />
          <ButtonBox />
          <CommentBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textAsButton: {
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5
  }
});

function ButtonBox() {
  return (
    <View style={{flexDirection: 'row'}}>
      <Button onPress={() => alert('clicked')} title="Like" />
      <TouchableHighlight style={styles.textAsButton} onPress={() => alert('clicked')}>
        <Text>Share</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.textAsButton} onPress={() => alert('clicked')}>
        <Text>Comment</Text>
      </TouchableHighlight>
  </View>
  )
}


class CommentBox extends React.Component {
  state = {
    comments: [
      {
        username: 'Some User',
        comment: 'A comment on the picture',
      },
      {
        username: 'Another User',
        comment: 'A comment on the picture'
      },
      {
        username: 'And Another User',
        comment: 'A comment on the picture',
      }
    ]
  }
  render() {
    return (
      <View style={{marginTop: 5, width: '100%'}}>
        {this.state.comments.map(({username, comment}, i) => {
          return (
            <View style={{borderWidth: 1}}> 
              <Text>
                {`${username}: ${comment}`}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }
}
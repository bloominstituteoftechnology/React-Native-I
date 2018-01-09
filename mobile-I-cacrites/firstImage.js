import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Button,
} from 'react-native';

export default class FirstImage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Header</Text>
        <Image 
          style={styles.lightboxImage}
          source={{ uri: 'https://i.imgur.com/v9E0JCr.png' }} />
        <View style={styles.buttonRow}>
          <Button style={styles.button} title={'Like'} onPress={console.log} />
          <Button style={styles.button} title={'Share'} onPress={console.log} />
          <Button style={styles.button} title={'Comment'} onPress={console.log} />
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.comment}>User A: A_comment on the picture</Text>
          <Text style={styles.comment}>User B: A-comment on the picture</Text>
          <Text style={styles.comment}>User C: A comment on the picture</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  lightboxImage: {
    height: 400,
    alignSelf: 'stretch',
  },
  header: {
    marginTop: 25,
    fontSize: 50,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
  },
  button: {
    width: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#000',
    overflow: 'hidden',
  },
  commentContainer: {
    marginTop: 25,
  },
  comment: {
    fontSize: 20,
    marginBottom: 15,
  },
});
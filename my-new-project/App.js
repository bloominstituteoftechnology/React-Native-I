import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from "react-native";

export default class App extends React.Component {
  render() {
    const renderButton = function() {
      return (
        <TouchableHighlight onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={require('./assets/icon.png')}
          />
        </TouchableHighlight>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>I assure you this is not Instagram!</Text>
        </View>
        <View style={styles.image}>
        <Image style={styles.image}
          source={require('./assets/200x200img.jpg')}
        />
        </View>
        <View style={styles.buttons}>
        <View style={styles.button}>
        <Button
        style={styles.button}
        title="Like"
        color="#4286f4"
        onPress={renderButton}
        accessibilityLabel="Tap or click this button to like this post"
      />
      </View>
      <View style={styles.button}>
      <Button
        style={styles.button}
        title="Share"
        color="#999"
        onPress={renderButton}
        accessibilityLabel="Tap or click this button to share post"
      />
      </View>
      <View style={styles.button}>
      <Button
        style={styles.button}
        title="Comment"
        color="#999"
        onPress={renderButton}
        accessibilityLabel="Tap or click to comment on post"
      />
      </View>
        </View>
        <View style={styles.comment}>
          <Text>Hale McHale: I was going to make it but it was hailing and I couldn't hail a cab
          </Text>
        </View>
        <View style={styles.comment}>
          <Text>Bill McBill: Can I use this image or do I have to speak to your billing department first?</Text>
        </View>
        <View style={styles.comment}>
          <Text>Mark McMarkie: I'll lose marks this marking period in markdown class if I keep going to these things</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    width: "99%",
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    margin: 2
  },
  image: {
    width: '99%',
    borderWidth: 1,
    margin: 2
  },
  buttons: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  button: {
    borderWidth: 1
  },
  comment: {
    width: "99%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 2,
    paddingTop: 5,
    paddingBottom: 5,
    padding: 3
  }
});

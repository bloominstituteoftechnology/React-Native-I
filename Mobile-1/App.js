import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TextInput,
} from 'react-native';

export default class App extends React.Component {
  state = {
    comments: [''],
    text: '',
    error: '',
  };

  handleTextChange = text => {
    this.setState({ text });
  };

  likeTask = () => {};

  shareTask = () => {};

  commentTask = () => {
    if (this.state.text === '') {
      this.setState({ error: `No message in text field.` });
      setTimeout(() => {
        this.setState({ error: '' });
      }, 2000);
      return;
    }
    this.setState(prevState => {
      let { text, comments } = prevState;
      return {
        comments: comments.concat({ key: comments.length, text }),
        text: '',
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kitties!</Text>
        <Image source={require('./images/img1.gif')} />
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.likeTask(index)} title="Like" />
          <Button
            color="purple"
            onPress={() => this.shareTask(index)}
            title="Share"
          />
          <Button onPress={() => this.commentTask()} title="Comment" />
        </View>
        <View>
          <TextInput
            style={styles.inputStyles}
            onSubmitEditing={this.commentTask}
            onChangeText={this.handleTextChange}
            value={this.state.text}
            placeholder="Add Comment"
          />
        </View>
        <FlatList
          data={this.state.comments}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Text>{item.text}</Text>
                <View style={styles.hr} />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '60%',
    justifyContent: 'space-around',
  },
  centerimage: {
    color: '#0b0b0b',
  },
  list: {
    width: '100%',
  },
  hr: {
    height: 1,
    backgroundColor: '#d3d3d3',
  },
  textItem: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: '#000000',
    width: '90%',
    height: 40,
    marginBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
  },
  listCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 50,
    color: '#000000',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

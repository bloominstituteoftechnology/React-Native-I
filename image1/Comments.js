import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button, Alert, TextInput } from 'react-native';

export default class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            commentButtonClicked: false,
            likes: 0,
            comments: [
                {
                    user: 'me',
                    comment: 'suuup',
                },
            ],
            newUser: '',
            newComment: '',
        };
    }

    handleLikeButtonClick = () => {
        this.setState({ likes: this.state.likes + 1 });
    }

    handleShareButtonClick = () => {
        Alert.alert( 'You have shared this image!');
    }

    handleCommentButtonClick = () => {
        this.setState({ commentButtonClicked: !this.state.commentButtonClicked });
    }

    handleUserNameInput = (username) => {
        this.setState({ newUser: username });
    }

    handleCommentInput = (comment) => {
        this.setState({ newComment : comment });
    }
    handleSubmitButtonClick = () => {
        this.setState(prevState => {
            const {likes} = prevState;
            const user = this.state.newUser;
            const comment = this.state.newComment
            return {
                commentButtonClicked: false,
                likes,
                comments : [...prevState.comments, {user, comment}],
                newUser: '',
                newComment: ''
            };
        });
    }

    render() {
        return (
            <View>
                <View style = {options}>
                    <Button onPress={this.handleLikeButtonClick} style={optionsItem} title='Like' />
                    <Button onPress={this.handleShareButtonClick} style={optionsItem} title='Share' />
                    <Button onPress={this.handleCommentButtonClick} style={optionsItem} title='Comment' />
                </View>

                {this.state.commentButtonClicked ? <View style={comment}>
                    <TextInput onChangeText={this.handleUserNameInput} placeholder = 'enter your username' style={commentItem} />
                    <TextInput onChange={this.handleCommentInput} placeholder = 'enter a comment' style={commentItem} />
                    <Button onPress={this.handleSubmitButtonClick} title='Submit Comment' />
                </View> : null}

                <Text>Likes: {this.state.likes}</Text>

                {this.state.comments.length > 0 ? <View style={allText}>
                    {this.state.comments.map((item, index) => (
                        <View key = {index}>
                            <Text style={textBox}>{item.user} : {item.comment}</Text>
                        </View>
                    ))}
                </View>: <Text>No Comments Yet.</Text>}

            </View>
        );
    };
};

const styles = StyleSheet.create({
    options: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
    },
    optionsItem: {
      margin: 10,
      padding: 5,
      borderColor: 'black',
      borderWidth: 0.5,
      height: '100%',
    },
    comment: {
        margin: 5,
        backgroundColor: '#d3d3d3',
    },
    commentItem: {
        color: '#000',
    },
    allText: {
      marginBottom: 20,
    },
    textBox: {
      margin: 5,
      padding: 5,
      width: 350,
      justifyContent: 'flex-start',
      fontSize: 16,
      borderColor: 'black',
      borderWidth: 0.5,
    },
    hiddenText: {
        
    },
    visibleText: {},
  });
  
  const { container, bannerImage, headerText, options, optionsItem, comment, commentItem, allText, textBox } = styles;
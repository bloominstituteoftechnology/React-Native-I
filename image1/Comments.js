import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button, Alert } from 'react-native';

export default class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            comments: [
                {
                    user: 'Some User',
                    comment: 'A comment on the picture',
                },
                {
                    user: 'Another User',
                    comment: 'A comment on the picture',
                },
            ],
            newComment: '',
        };
    }

    handleLikeButtonClick = () => {
        this.setState({ likes: this.state.likes + 1 });
    }

    handleShareButtonClick = () => {
        Alert.alert( 'You have shared this image!');
    }

    handleButtonClick= () => {
        console.log('why is it clicking without me clicking it');
    };

    render() {
        return (
            <View>
                <View style = {options}>
                    <Button onPress={this.handleLikeButtonClick} style={optionsItem} title='Like' />
                    <Button onPress={this.handleShareButtonClick} style={optionsItem} title='Share' />
                    <Button onPress={this.handleButtonClick} style={optionsItem} title='Comment' />
                </View>
                <Text>Likes: {this.state.likes}</Text>
                <View style={allText}>
                    {this.state.comments.map((item, index) => (
                        <View key = {index}>
                            <Text style={textBox}>{item.user}:{item.comment}</Text>
                        </View>
                    ))}
                </View>
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
    }
  });
  
  const { container, bannerImage, headerText, options, optionsItem, allText, textBox } = styles;
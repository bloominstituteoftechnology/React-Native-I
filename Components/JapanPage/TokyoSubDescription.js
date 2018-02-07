import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TokyoSubDescription = () => {
    return (
        <View style={commentsContainer}>
            <View style={commentContainer}>
                <Text style={commentText}>yay</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    commentsContainer: {
        height: 100,
        margin: 2
    },
    commentContainer: {
        backgroundColor: '#56D2C7',
        margin: 1,
    },
    commentText: {
        padding: 10,
        color: 'white',
        borderRadius: 20,
    },
});

const { commentsContainer, commentContainer, commentText } = styles;

export default TokyoSubDescription;
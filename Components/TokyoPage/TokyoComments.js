import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TokyoComments = () => {
    return (
        <View style={commentsContainer}>
            <View style={commentContainer}>
                <Text style={commentText}>jayc12312: I want to go there!</Text>
            </View>
            <View style={commentContainer}>
                <Text style={commentText}>crazYCat23: Nice photo!</Text>
            </View>
            <View style={commentContainer}>
                <Text style={commentText}>SFBoundsss: Awesome =)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    commentsContainer: {
        height: 100,
        marginVertical: 2
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

export default TokyoComments;
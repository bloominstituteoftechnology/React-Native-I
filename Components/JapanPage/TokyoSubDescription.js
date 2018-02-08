import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TokyoSubDescription = () => {
    return (
        <View style={commentsContainer}>
            <View style={commentContainer}>
                <Text style={commentText}>Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara Islands are also part of Tokyo.</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    commentsContainer: {
        height: 100,
        marginHorizontal: 3,
        marginBottom: 3
    },
    commentContainer: {
        backgroundColor: '#56D2C7',
    },
    commentText: {
        padding: 10,
        color: 'white',
        borderRadius: 20,
    },
});

const { commentsContainer, commentContainer, commentText } = styles;

export default TokyoSubDescription;
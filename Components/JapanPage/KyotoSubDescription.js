import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const KyotoSubDescription = () => {
    return (
        <View style={commentsContainer}>
            <View style={commentContainer}>
                <Text style={commentText}>Kyoto (京都, Kyōto) served as Japan's capital and the emperor's residence from 794 until 1868. It is one of the country's ten largest cities with a population of 1.5 million people and a modern face.</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    commentsContainer: {
        height: 100,
        margin: 3
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

export default KyotoSubDescription;
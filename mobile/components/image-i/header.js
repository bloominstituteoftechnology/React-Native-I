import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default ({ title='windows xp' }) =>
        <View style={styles.header}>
            <TouchableOpacity style={styles.back}>
                <Text>{'< back'}</Text>
            </TouchableOpacity>
            <Text style={styles.content}>{ title }</Text>
        </View>


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    content: {
        textAlign: 'center',
        flex: 5,

    },
    back: {

    }
});

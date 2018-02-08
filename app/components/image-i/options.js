import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default props => 
    <View style={styles.root}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Comment</Text>
        </TouchableOpacity>
    </View>

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        width: 225,
        alignSelf: 'center'
    },
    button: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#ccc',
    },
    text: {
        textAlign: 'center'
    }
});
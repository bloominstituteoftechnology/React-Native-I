import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

class CommentList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'This image is awesome!'},
                        {key: 'Great image!'},
                        {key: 'Traveling through digital mindscape!'},
                        {key: 'Wow!'},
                        {key: 'Its alright, Ive seen better'},
                        {key: 'Reminds me of a Sci-Fi movie'},
                        {key: 'Cool!!!'},
                        {key: 'Where is this image from?'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 16,
        height: 44,
        borderWidth: 0.5,
        borderColor: '#212121',
        width: 300,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        marginTop: 30,
        marginBottom: 30,
    },
    
});

export default CommentList;
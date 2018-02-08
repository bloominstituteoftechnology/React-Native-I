import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const comments = [
    { user: 'Some User', text: 'A comment on the picture' },
    { user: 'Another User', text: 'Another comment on the picture' },
    { user: 'An Another User', text: 'And another comment on the picture' }
]
export default props => 
    <View>
        { comments.map((comment, i) => <Text key={i} style={styles.comment}>{comment.user}: {comment.text}</Text>)}
    </View>

const styles = StyleSheet.create({
    comment: {
        borderWidth: 2,
        borderColor: '#000',
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    }
});

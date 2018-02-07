import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const Comments = () => {
    return (
        <View style={styles.buttonRow}>
        <View style={styles.commentContainer}>
        <Text style={styles.comment}>Some User: A comment on the picture</Text>
        <Text style={styles.comment}>Another User: A comment on the picture</Text>
        <Text style={styles.comment}>And Another User: A comment on the picture</Text>
      </View>
    </View>
  );
 }



const styles = StyleSheet.create({
    commentsWrapper: {
        marginTop: 25,
        },
    comment: {
        fontSize: 20,
        marginBottom: 15,
    },
});

const {  } = styles;
export default Comments; 
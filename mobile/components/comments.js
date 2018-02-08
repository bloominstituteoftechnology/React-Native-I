import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const Comments = () => {
    return (
        
        <View style={commentWrapperr}>
            <Text style={comment}>Some User: A comment on the picture</Text>
            <Text style={comment}>Another User: A comment on the picture</Text>
            <Text style={comment}>And Another User: A comment on the picture</Text>
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

const { commentsWrapper, comment } = styles;
export default Comments; 
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const PostPageImageContainer = () => {
    return (
        <View style={imageWrapper}>
            <Image
                style={imageProper}
                source={{ uri: 'http://blog.buckitdream.com/wp-content/uploads/2017/11/tokyo-mud-bath-bar-mudbath0716.jpg' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageWrapper: {
        height: 350,
    },
    imageProper: {
        height: '100%'
    }
});

const { imageWrapper, imageProper } = styles;
export default PostPageImageContainer;
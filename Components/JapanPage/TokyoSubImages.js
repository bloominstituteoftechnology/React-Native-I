import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const TokyoSubImages = () => {
    return (
        <View style={imageWrapper}>
            <Image
                style={imageProper}
                source={{ uri: 'http://blog.buckitdream.com/wp-content/uploads/2017/11/tokyo-mud-bath-bar-mudbath0716.jpg' }}
            />
            <Image
                style={imageProper}
                source={{ uri: 'https://fastjapan.com/en/wp-content/uploads/2016/02/shutterstock_183536486.jpg' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageWrapper: {
        flexDirection: 'row',
        height: 100,
        width: 200,
    },
    imageProper: {
        height: '100%'
    }
});

const { imageWrapper, imageProper } = styles;
export default TokyoSubImages;
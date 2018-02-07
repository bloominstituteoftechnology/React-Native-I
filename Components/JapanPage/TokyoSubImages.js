import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';


const TokyoSubImages = (props) => {
    return (
        <View style={imageWrapper}>
            <TouchableOpacity style={imageProper}
                onPress={props.section}>
                <Image
                    style={imageProper}
                    source={{ uri: 'http://blog.buckitdream.com/wp-content/uploads/2017/11/tokyo-mud-bath-bar-mudbath0716.jpg' }}
                />
            </TouchableOpacity>
            <Image
                style={imageProper}
                source={{ uri: 'https://fastjapan.com/en/wp-content/uploads/2016/02/shutterstock_183536486.jpg' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageWrapper: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        marginHorizontal: 3
    },
    imageProper: {
        width: 184.5,
        height: 100
    }
});

const { imageWrapper, imageProper } = styles;
export default TokyoSubImages;
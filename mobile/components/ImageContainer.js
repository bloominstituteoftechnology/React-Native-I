import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageContainer = () => {
    return (
        <View style={imageWrapper}>
            <Image 
                style={imageProper}
                source={{ uri: 'http://www.engineswapdepot.com/wp-content/uploads/2015/01/1991-Acura-NSX-With-LoveFabs-Pikes-Peak-2012-V6-05-1024x670.jpg' }} 
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    imageWrapper: {
        borderWidth: 1,
        borderColor: 'blue',
        height: 375,
    },
    imageProper: {
        height: '100%'

    }
});

const { imageWrapper, imageProper } = styles;
export default ImageContainer;
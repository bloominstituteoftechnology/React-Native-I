import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const JapanBannerImage = () => {
    return (
        <View style={imageWrapper}>
            <Image
                style={imageProper}
                source={{ uri: 'http://en.toureast.com/portals/0/img/country/japan/japan_header.jpg' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageWrapper: {
        height: 200,
    },
    imageProper: {
        height: '100%'
    }
});

const { imageWrapper, imageProper } = styles;
export default JapanBannerImage;
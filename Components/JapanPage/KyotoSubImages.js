import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const TokyoSubImages = () => {
    return (
        <View style={imageWrapper}>
            <Image
                style={imageProper}
                source={{ uri: 'http://static5.businessinsider.com/image/5818c9bbdd08956c5a8b47b1/19-photos-that-show-why-kyoto-and-tokyo-were-voted-the-best-cities-in-the-world.jpg' }}
            />
            <Image
                style={imageProper}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKx4AdvqZuFQkLDmii1JLeOiRsJzdTxGt599iN-Ixkfb07pzya' }}
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
        width: 184.5
    }
});

const { imageWrapper, imageProper } = styles;
export default TokyoSubImages;
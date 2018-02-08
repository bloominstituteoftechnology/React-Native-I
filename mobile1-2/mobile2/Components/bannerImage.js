import React from 'react';

import { StyleSheet, View, Image } from 'react-native';

class BannerImage extends React.Component {
    render () {
        return (
            <Image 
            style={bannerImage}
            source={{uri:'https://farm5.staticflickr.com/4745/28339992729_8f31219359_m.jpg'}}/>
        
        )
    }
    };

    const styles = StyleSheet.create({
        bannerImage: {
            marginTop:15,
            height:125,
            alignSelf: 'stretch'
        },
        
    });
    const { bannerImage } = styles;

export default BannerImage;
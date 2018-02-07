import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default class ImageCake extends React.Component {
    render() {
        return (
            <Image 
            style={image}
            source={{uri:'https://farm5.staticflickr.com/4622/25237402937_96b41a9e7b_m.jpg'}}
             />
        )
    }    
    };

    const styles = StyleSheet.create({
        image: {
            height:'45%',
            width: '100%',
            justifyContent: 'center',
            padding: 5
          }
    });

    const { image } = styles;

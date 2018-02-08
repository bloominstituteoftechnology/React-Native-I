import React from 'react';
import Component from 'react';
import { StyleSheet, View, Image } from 'react-native';

class ImageBoxA extends React.Component {
    render () {
        return (
        <View style={imageBox}>
            <Image style={leftImage}
            source={{uri:'https://farm5.staticflickr.com/4622/25237402937_96b41a9e7b_m.jpg'}}/>
                
                <Image style={rightImage}
                source={{uri:'https://farm5.staticflickr.com/4622/25237402937_96b41a9e7b_m.jpg'}}/>
        </View>
          )
        }
        };
    
        const styles = StyleSheet.create({
            imageBox: {
                flex:1,
                flexDirection:'row'
            },
            leftImage: {
                flex:1,
               height:125
            },
            rightImage: {
                flex:1,
                height:125
            }
        });

        const { imageBox, leftImage, rightImage } = styles;
    
    export default ImageBoxA;

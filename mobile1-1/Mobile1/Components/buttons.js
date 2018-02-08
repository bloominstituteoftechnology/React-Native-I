import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class Buttons extends React.Component {
    render() {
        return (
            <View style= {buttons}>
            <TouchableOpacity style={likeButton}>
            <Text> Like</Text></TouchableOpacity>
          
            <TouchableOpacity 
            style={shareButton}>
            <Text>Share</Text>
            </TouchableOpacity>
          
            <TouchableOpacity 
            style={commentButton}
            >
             <Text>Comment</Text>
             </TouchableOpacity>
    
             </View>
        )
    }    
    };

    const styles = StyleSheet.create({
        buttons:{
            flexDirection:'row',
            height:'10%',
            justifyContent: 'center',
            marginTop: '5%'
            },
            likeButton: {
                flexDirection: 'row',
                borderTopWidth:2,
                borderLeftWidth:2,
                borderBottomWidth:2,
                borderRightWidth: 1,
                justifyContent: 'center',
                alignItems:'center',
                padding: '5%'
              },
              shareButton: {
                  flexDirection: 'row',
                  borderTopWidth:2,
                  borderLeftWidth:1,
                  borderBottomWidth:2,
                  borderRightWidth: 1,
                  justifyContent: 'center',
                  alignItems:'center',
                  padding:'5%'
              },
              commentButton: {
                flexDirection: 'row',
                borderTopWidth:2,
                borderLeftWidth:1,
                borderBottomWidth:2,
                borderRightWidth: 2,
                justifyContent: 'center',
                alignItems:'center',
                padding:'5%'
            }
    });

    const { buttons, commentButton, shareButton, likeButton} = styles;

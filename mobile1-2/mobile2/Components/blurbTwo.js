import React from 'react';
import Component  from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BlurbTwo extends React.Component {
    render () {
        return (
        <View style={blurb}>
            <Text style={blurbText}> This is a some more smaller text that is giving information
                about the two images up above. You might see this kind of design 
                on a news site </Text>
        </View>
        )
    }
    };

   
    const styles = StyleSheet.create({
        blurb: {
            height: 85,
            width:'99%',
            borderColor:'black',
            borderWidth:2,
            marginBottom:15
            },
            blurbText: {
                fontSize: 15,
                paddingLeft:5,
                justifyContent:'center'
                

            }
    });
    const { blurb,blurbText } = styles;

export default BlurbTwo;
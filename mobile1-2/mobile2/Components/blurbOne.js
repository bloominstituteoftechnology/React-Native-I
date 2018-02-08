import React from 'react';
import Componet  from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BlurbOne extends React.Component {
    render () {
        return (
        <View style={blurb}>
            <Text style={blurbText}> This is a bunch of smaller text that is giving information
                about the two images up above. 
                
                You might see this kind of design 
                on a news site </Text>
        </View>
        )
    }
    };

    const styles = StyleSheet.create({
        blurb: {
            height: 100,
            },
            blurbText: {
                fontSize: 15,
                paddingLeft:3
            }
    });
    const { blurb,blurbText } = styles;

export default BlurbOne;
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
        <View style={header}>
        <Text style={headerText}> Wedding Cake</Text>
        </View>
        )
    }    
    };

    const styles = StyleSheet.create({
        header:{ 
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10%',
            marginTop: '8%',
            marginBottom: '8%',
            paddingTop: '2%',
            
          },
          headerText: {
            fontSize:40
          },
    });

    const { header, headerText} = styles;

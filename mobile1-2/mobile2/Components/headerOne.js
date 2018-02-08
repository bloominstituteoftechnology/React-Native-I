import React from 'react';
import  Component  from 'react';
import { StyleSheet, View, Text } from 'react-native';

class HeaderOne extends React.Component {
    render () {
        return (
        <View style={header}>
            <Text style={headerText}> Some Random Header </Text>
        </View>
        )
    }
    };

    const styles = StyleSheet.create({
        header: {
            height:40,
            
        },
        headerText:{
            fontSize:30,
        }
    });
    const { header, headerText } = styles;

export default HeaderOne;
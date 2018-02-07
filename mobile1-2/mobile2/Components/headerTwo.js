import React from 'react';
import  Componet  from 'react';
import { StyleSheet, View, Text } from 'react-native';

class HeaderTwo extends React.Component {
    render () {
        return (
        <View style={header}>
            <Text style={headerText}> Some Other Random Header </Text>
        </View>
        )
    }
    };
    const styles = StyleSheet.create({
        header: {
            height:40,
            
        },
        headerText:{
            fontSize:25,
        }
    });
    const { header, headerText} = styles;

export default HeaderTwo;
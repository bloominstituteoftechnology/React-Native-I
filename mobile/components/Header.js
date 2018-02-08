import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text>Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({    
    headerConatiner: {
        backgroundColor: '#e3e3e3',
        height: 70,
        marginTop: 45,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 25
    }
});

const { headerContainer } = styles;

export default Header;
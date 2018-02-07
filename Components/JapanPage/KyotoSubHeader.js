import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KyotoSubHeader = () => {
    return (
        <View style={headerContainer}>
            <Text style={headerText}>Kyoto</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#56D2C7',
        height: 60,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 3,
        marginHorizontal: 3
    },
    headerText: {
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
});

const { headerContainer, headerText } = styles;

export default KyotoSubHeader;
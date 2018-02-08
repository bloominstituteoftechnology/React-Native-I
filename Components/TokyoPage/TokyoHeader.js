import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const TokyoHeader = (props) => {
    console.log('props', props);
    return (
        <View style={headerContainer}>
            <TouchableOpacity
                onPress={props.section}>
                <Image
                    style={imageProper}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Feedbin-Icon-left-arrow.svg/500px-Feedbin-Icon-left-arrow.svg.png' }}
                />
            </TouchableOpacity>
            <Text style={headerText}>Tokyo</Text>
            <View style={imageProper}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#56D2C7',
        height: 50,
        marginTop: 25,
    },
    imageProper: {
        marginHorizontal: 8,
        marginVertical: 8,
        width: 20,
        height: 30,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontSize: 25,
        marginTop: 8,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center'
    },
});

const { headerContainer, headerText, imageProper } = styles;

export default TokyoHeader;
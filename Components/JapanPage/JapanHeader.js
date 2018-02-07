import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements'


const JapanHeader = () => {
    return (
        <View style={headerContainer}>
            <TouchableOpacity>
                <Image
                    style={imageProper}
                    source={{ uri: 'http://www.stickpng.com/assets/images/588a64e7d06f6719692a2d11.png' }}
                />
            </TouchableOpacity>
            <SearchBar containerStyle={searchBar} round placeholder='Enter Destination...' />
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#56D2C7',
        justifyContent: 'center',
        height: 50,
        marginTop: 25,
    },
    imageProper: {
        marginHorizontal: 8,
        marginVertical: 8,
        width: 30,
        height: 30
    },
    searchBar: {
        width: 330
    }
});

const { headerContainer, imageProper, searchBar } = styles;

export default JapanHeader;
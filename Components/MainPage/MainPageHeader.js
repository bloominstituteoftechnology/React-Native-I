import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'


const someMethod = () => {

}

const MainPageHeader = () => {
    return (
        <View>
            <View>

            </View>
            <View style={headerContainer}>
                <SearchBar
                    round
                    onChangeText={someMethod}
                    onClearText={someMethod}
                    placeholder='Type Here...' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#56D2C7',
        height: 70,
        marginTop: 45,
        justifyContent: 'center',
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

export default MainPageHeader;
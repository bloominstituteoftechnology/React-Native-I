import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';



export default class DisplayAnImage extends React.Component {
    constructor() {
        super();
        this.state = {
            hasBeenPressed: false,
        };
    }

    handlePress = () => {
        this.setState = {
            hasBeenPressed: true,
        };
    };


    render() {

        return (
            < View >
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://4.bp.blogspot.com/-QnOcALNBJyQ/WmFwfQ-ZDaI/AAAAAAAACkg/ENdrUGbp4aMlc34YDbl8xPcIifsvkTshACLcBGAs/s1600/blueberrystuffedcrunchfrenchtoast.jpg' }}
                    />
                </View>

            </View >
        );
    }
}
const styles = StyleSheet.create({

});


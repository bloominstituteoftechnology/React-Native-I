import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

class Buttons extends Component {
    _onLike() {
        Alert.alert('Thank you for linking!');
    }
    _onShare() {
        Alert.alert('Thank you for sharing!');
    }
    _onComment() {
        Alert.alert('Successfully commented on this post.');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button
                        onPress={this._onLike}
                        title="Like"
                    />
                <View style={styles.button}>
                </View>
                    <Button
                        onPress={this._onShare}
                        title="Share"
                    />
                <View style={styles.button}>
                </View>
                    <Button
                        onPress={this._onComment}
                        title="Comment"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 3,
        height: 30,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 20,
    },
});

export default Buttons
import React from "react";
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const items = [
    {
        type: 'Windows', 
        wallpapers: [
            { title: 'Windows xp', image: 'https://www.hdwallpapers.in/walls/windows_xp_bliss-wide.jpg'},
            { title: 'Windows 10', image: 'https://i-cdn.phonearena.com/images/articles/195110-image/Windows-10-wallpapers-in-4K.jpg'}
        ]
    },
    {
        type: 'MacOS',
        wallpapers: [
            { title: 'Sierra', image: 'http://512pixels.net/downloads/macos-wallpapers/10-12.jpg'},
            { title: 'El Capitan', image: 'http://media.idownloadblog.com/wp-content/uploads/2015/06/Wallpaper-OS-X-El-Capitan-Mac.jpg'}
        ]
    }
]
export default class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
  static navigationOptions = ({ navigation }) => ({
    title: "Discover",
    headerLeft: null
  });
  goto({ title, image }) {
    console.log(title, image)
    this.props.navigation.navigate('Single', {title, image });
  }
  render() {
    return (
      <View style={styles.root}>
        <TextInput
            onChangeText={(text) => this.setState({ text })}
            placeholder="Search"
            value={this.state.text}
        />
        <ScrollView style={styles.scroll}>
            { items.map((item, i) => 
                <View key={i}>
                    <Text>{ item.type }</Text>
                   <View style={styles.listing}>
                   { item.wallpapers.map((wallpaper, i) =>
                            <TouchableOpacity key={i} style={styles.imageView} onPress={() => this.goto(wallpaper)}>
                                <Image
                                style={styles.image}
                                key={i}
                                source={{
                                uri: wallpaper.image
                                }}
                            />
                        </TouchableOpacity>
                    )}
                   </View>
                </View>
            )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    scroll: {
        flex: 1
    },
    listing: {
        flexDirection: 'row',
        flex: 1,
        height: 200,
    },
    imageView: {
        height: 200,
        width: '50%'
    },
    image: {
        height: 200,
    }
});

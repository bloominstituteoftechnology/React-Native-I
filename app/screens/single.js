import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/image-i/header";
import Options from "../components/image-i/options";
import Comments from "../components/image-i/comments";

export default class Single extends React.Component {
  constructor(props) {
      super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerLeft: (
        <TouchableOpacity onPress={()=> navigation.navigate('Discover')}>
                <Text>{'< back'}</Text>
            </TouchableOpacity>
    )
  })
  render() {
    return (
      <View style={styles.view}>
        <ScrollView>
          <Image
            source={{
              uri: this.props.navigation.state.params.image
            }}
            style={styles.image}
          />
          <Options />
          <Comments />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  image: {
    height: 300,
    borderWidth: 2,
    borderColor: "#000"
  }
});

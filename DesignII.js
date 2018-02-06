import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  Button, 
  TextInput, 
  TouchableHighlight
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default class DesignII extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <Banner />
        <ImageContainerWithDescription />
        <ImageContainerWithDescription />
      </View>
    );
  }
}

function SearchBar() {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <TouchableHighlight>
        <Image 
          style={{width: screenWidth * 0.10, height: screenHeight * 0.05}}
          source={require("./assets/menuicon.png")} />
      </TouchableHighlight>
      <TextInput style={{width: screenWidth * 0.90, textAlign: 'center'}} placeholder="Search" />
    </View>
  )
}

function Banner() {
  return (
    <Image
      style={{ 
        width: screenWidth, height: screenHeight * 0.25 
      }}
      source={require("./assets/react-logo.png")}
    />
  );
}

function DoubleImageContainer() {
  const imageStyle = {
    width: screenWidth * 0.5,
    height: screenHeight * 0.2
  };
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", paddingBottom: 1 }}>
      <Image
        style={imageStyle}
        source={require("./assets/react-logo.png")}
      />
      <Image style={imageStyle} source={require("./assets/react-logo.png")} />
    </View>
  );
}

function Description() {
  return (
    <View style={{ borderWidth: 1 }}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </View>
  );
}

function ImageContainerWithDescription() {
  return (
    <View style={{paddingBottom: 10}}>
      <Text>Some Random Header</Text>
      <DoubleImageContainer />
      <Description />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    paddingTop: 20
  },
  banner: {
    marginBottom: 25,
    resizeMode: "center",
    width: "100%",
    height: "33%"
  }
});

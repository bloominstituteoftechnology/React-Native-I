import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';

class PicBox extends Component {
  render() {
    const textBody = this.props.text;
    const leftPic = this.props.leftPic;
    const rightPic = this.props.rightPic;
    const header = this.props.header;
    const img = {
      height: 80,
      width: '46%'
    };
    return (
      <View style={styles.container3}>
      <Text style={styles.bigblue}>{header}</Text>
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image source={leftPic} style={{width: img.width, height: img.height}}/>
        <Image source={rightPic} style={{width: img.width, height: img.height}}/>
      </View>
      <Text style={styles.comments}>{textBody}</Text>
      </ View>
    );
  }
};

class InstaClone extends Component {
  render() {
    const picture = this.props.pix;
    const imag = {
      height: 250,
      width: '90%'
    };

    return (
      <View style={styles.container3}>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image source={picture} style={{width: imag.width, height: imag.height}}/>
        </View>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button title={'like'}/>
          <Button title={'share'}/>
          <Button title={'comment'}/>
        </View>
        <View style={styles.containa}>
          <Text style={styles.comments2}>Edgar Poe: this is really creepy</Text>
          <Text style={styles.comments2}>Sam Salamander: nice gif bro</Text>
          <Text style={styles.comments2}>Cole Ferguson: don't be hatin'</Text>
        </View>
      </ View>
    );
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: false
    }
  }

  handlePress() {
    const switchPage = !this.state.homepage
    this.setState({homepage: switchPage})
    console.log(this.state.homepage, '= handled the press')
    return;
  }

  render() {
    let pic = {
      uri: 'https://media.giphy.com/media/3ov9jOQwMqotVe2G1G/giphy.gif'
    };
    let pic2 = {
      uri: 'https://media.giphy.com/media/3ov9jCIB94ZqQpNYPK/giphy.gif'
    };
    let pic3 = {
      uri: 'https://media.giphy.com/media/xT9IgmraIhwfDaLDXi/giphy.gif'
    };
    const img = {
      height: 100,
      width: '100%'
    };
    if (this.state.homepage) { return (
      <View style={styles.container4}>
        <View style={styles.littleSpace}>
        </View>
        <View style={styles.container2}>
        <Button onPress={this.handlePress.bind(this)} title={'switch view'}/>
          <TextInput style={{height: '80%', borderColor: 'gray', borderWidth: 1, width: '75%', fontSize: 25}}/>
        </View>
        <Image source={pic} style={{width: img.width, height: img.height}}/>
        <View style={styles.container}>
            <PicBox onPress={this.handlePress.bind(this)} header={'the rake is second lol'} leftPic={pic2} rightPic={pic3} text={'Wow how neat is that! Thats pretty neat. You can tell its an aspen by the way it is yo. Ya know what I mean? Yeah you do.' } />
            <PicBox header={'the rake is first omg'} leftPic={pic3} rightPic={pic2} text={'Look at these two pictures. These pictures are incredible dude like seriously totally out of this freaking world man wow' } />
        </View>
      </View>
      );
    } else {
      return (
        <View style={styles.container4}>
        <View style={styles.littleSpace}>
        </View>
        <Button onPress={this.handlePress.bind(this)} title={'switch view'}/>
        <Image source={pic} style={{width: img.width, height: img.height}}/>
        <View style={styles.container}>
            <InstaClone onPress={this.handlePress.bind(this)} pix={pic2} />
        </View>
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container4: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  littleSpace: {
    backgroundColor: 'black',
    height: 25,
    width: '100%'
  },
  container3: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '94%',
    height: 20
  },
  container2: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
    flexDirection: 'row'
  },
  containa: {
    flex: 2,
    width: '100%'
  },
  bigblue: {
    color: 'green',
    fontWeight: '900',
    fontSize: 30,
  },
  comments: {
    flex: 1,
    color: '#fff',
    fontWeight: '300',
    fontSize: 15
  },
  comments2: {
    backgroundColor: '#aaa',
    flex: 0,
    color: '#fff',
    fontWeight: '300',
    fontSize: 15
  }
});



// <View style={styles.container}>
// <Text style={styles.bigblue}>Welcome to the app!!</Text>
// </View>
// <Image source={pic2} style={{width: img.width, height: img.height}}/>
// <View style={styles.container}>
// <Text style={styles.comments}>he looks happy.</Text>
// <Text style={styles.comments}>kyle what r u doing</Text>
// </View>
// <Image source={pic} style={{width: img.width, height: img.height}}/>
// <View style={styles.container}>
// <Text style={styles.comments}>THIS IS SCARY</Text>
// <Text style={styles.comments}>wow this is terrible what movie is dis</Text>
// </View>
// <Image source={pic3} style={{width: img.width, height: img.height}}/>
// <View style={styles.container}>
// <Text style={styles.comments}>kyle you need help</Text>
// <Text style={styles.comments}>i raked my lawn yesterday</Text>
// </View>
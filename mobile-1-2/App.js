import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchFunction = this.searchFunction.bind(this);
    this.state = { text: 'search' };
  }
  searchFunction(text) {
    let store = this.state.text;
    store = store + text;
    this.setState({
      text: store
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.menu}>
            <View style={styles.menuLine}>
            </View>
            <View style={styles.menuLine}>
            </View>
            <View style={styles.menuLine}>
            </View>
          </View>
          <View style={styles.search}>
            <TextInput
            value={this.state.text}
            />
          </View>
        </View>
        <View style={styles.bannerImage}>
          <Image 
            source={require('./assets/download.jpg')}
          />
        </View>
        <View style={styles.randomHeader}>
          <Text style={styles.bannerText}> stuff </Text>
        </View>
        <View style={styles.twoimages}>
          <View style={styles.leftImage}>
            <Image 
              source={require('./assets/200x180one.jpg')}
            />
          </View>
          <View style={styles.rightImage}>
          <Image 
              source={require('./assets/200x180two.jpg')}
            />
          </View>
        </View>
        <View style={styles.smallerText}>

        <Text >stuff, stuff, and more stuff, and then some. I mainly want to be able to reach several lines in this paragraph to see what it looks like </Text>
        </View>
        <View style={styles.randomHeader}>

          <Text style={styles.bannerText}> stuff </Text>
        </View>
        <View style={styles.twoimages}>
          <View style={styles.leftImage}>
          <Image 
              source={require('./assets/200x180three.jpg')}
            />
          </View>
          <View style={styles.rightImage}>
          <Image 
              source={require('./assets/200x180four.jpg')}
            />
          </View>
        </View>
        <View style={styles.smallerText}>

        <Text >stuff, stuff, and more stuff, and then some. I mainly want to be able to reach several lines in this paragraph to see what it looks like </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  menu: {
    padding: 5,
    width: '15%',
  },
  menuLine: {
    width: 20,
    height: 4,
    backgroundColor: '#000',
    marginTop: 3,
  },
  search: {
    borderRadius: 25,
    borderColor:'black',
    backgroundColor:'#fff',
    width:'80%',
    borderWidth: 1,
  },
  bannerImage: {
    width: '99%',
    height: '20%',
    borderWidth: 1,
    margin: 2
  },
  randomHeader: {
    width: '99%',
    height: '8%',
    alignItems: 'center'
  },
  twoimages: {
    width: '99%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',

    height: '20%',
  },
  leftImage: {
    width: '49%',
    borderWidth: 1,
  },
  rightImage: {
    width: '49%',
    borderWidth: 1,
  },
  smallerText: {
    borderWidth: 2,
    height: '9%'
  },
  bannerText: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});


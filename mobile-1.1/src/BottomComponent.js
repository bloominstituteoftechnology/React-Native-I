import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class BottomComponent extends Component {
    render() {
        let thirdImage = {
            uri: 'https://media4.s-nbcnews.com/j/newscms/2017_38/2162821/ss-170921-hurricane-maria-dominica-mn-0915_0197f335d72c1ffe9f70cf7af5474d24.nbcnews-fp-1240-520.jpg'
        };
        let secondImage = {
            uri: 'https://media1.s-nbcnews.com/j/newscms/2017_38/2162676/ss-170921-hurricane-maria-puerto-rico-update-mn-01_fdeb1df1f5eb47ad1e433c5967faebc7.nbcnews-ux-1024-900.jpg'
        }
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    Hurricane Maria Churns Past Turks and Caicos After Ravaging Puerto Rico.
                </Text>
                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 10}}>
                        <Image source={thirdImage} style={styles.image}/>
                        <Text style={styles.bodyText}>
                            Hurricane Maria has added to the extensive damage on 
                            the British overseas territory of the Turks and 
                            Caicos Islands, the Foreign Office has said, after the 
                            region was pummelled by a second major storm in two weeks.
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 10}}>
                        <Image source={secondImage} style={styles.image}/>
                        <Text style={styles.bodyText}>
                           Hurricane warnings for the Turks and Caicos Islands and 
                           parts of the Bahamas were downgraded to tropical storm 
                           warnings Friday afternoon as Hurricane Maria was moving past, 
                           while millions of people in Puerto Rico continued to struggle 
                           with rebounding from the deadly and destructive storm.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  headerText: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 16, 
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  bodyText:{
    color: '#fff',
    fontSize: 10,
  },
  image: {
    width: 150, 
    height: 120,
  },
  container: {
    flex: 8,
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: '#d6d7da',
  },
});

export default BottomComponent;
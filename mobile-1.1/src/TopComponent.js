import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class TopComponent extends Component {
    render() {
        let firstImage = {
            uri: 'http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/09/20/Pictures/mexico-earthquake_b66646f4-9dc6-11e7-9c3b-8e901839ece0.jpg'
        };
        let secondImage = {
            uri: 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/world/2017/09/20/7-1-magnitude-earthquake-kills-more-than-100-in-mexico-collapses-buildings/_jcr_content/article-text/article-par-4/inline_spotlight_ima/image.img.jpg/612/344/1505856948275.jpg?ve=1&tl=1'
        }
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    Mexico digs through rubble after 7.1 earthquake kills 225.
                </Text>
                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 10}}>
                        <Image source={firstImage} style={styles.image}/>
                        <Text style={styles.bodyText}>
                            Police, firefighters and ordinary Mexicans dug frantically 
                            through the rubble of collapsed schools, homes and apartment 
                            buildings early Wednesday, looking for survivors of Mexico’s 
                            deadliest earthquake in decades as the number of confirmed 
                            fatalities stood at 225.
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 10}}>
                        <Image source={secondImage} style={styles.image}/>
                        <Text style={styles.bodyText}>
                           Tuesday's 7.1 magnitude earthquake in Mexico was becoming 
                           a greater tragedy with each passing hour. Early Wednesday, 
                           the death toll stood at 217, after being revised downward 
                           from 248, the Associated Press reported, as rescue teams 
                           continued to search for survivors in the rubble of collapsed 
                           buildings in Mexico City and surrounding areas.
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
    paddingRight: 10,
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

export default TopComponent;
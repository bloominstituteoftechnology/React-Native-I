import React from 'react';
import { View, Text } from 'react-native';

const styles = require('./Styles.js');

export default () => (
  <View style={styles.commentContainer}>

    <View style={styles.indComment}>
      <Text style={styles.user}>SSMajor324:</Text>
      <Text style={styles.comment}>cool cat bro.. NOT! that was a good joke wasn't it? Did you laugh?</Text>
    </View>
    <View style={styles.indComment}>
      <Text style={styles.user}>Joe45:</Text>
      <Text style={styles.comment}>you stole this picture from me.. I want it back or else!!!!!!</Text>
    </View>
  </View>
)
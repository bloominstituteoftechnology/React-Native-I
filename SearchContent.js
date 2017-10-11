import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './SearchStyleSheet';

export default () => (
  <View style={{ flex: 1 }}>
    <View style={styles.banner}>
      <Image
        source={require('./assets/banner.png')}
        resizeMode="stretch"
        style={styles.banner}
      />
    </View>
    <View style={styles.body}>
      <Text style={styles.h1}>Meatloaf et do est culpa officia</Text>
      <Image source={require('./assets/1.png')} style={styles.image} />
      <Image source={require('./assets/2.png')} style={styles.image} />
      <Text style={styles.text}>
        Spicy jalapeno bacon ipsum dolor amet picanha tongue reprehenderit
        laboris, dolore est ipsum. Occaecat aliquip drumstick, filet mignon
        flank spare ribs officia boudin eiusmod ea pork belly tempor proident
        ground round capicola.
      </Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.h1}>Et proident irure pork loin</Text>
      <Image source={require('./assets/3.png')} style={styles.image} />
      <Image source={require('./assets/4.png')} style={styles.image} />
      <Text style={styles.text}>
        Tri-tip tempor frankfurter et, short ribs biltong sunt beef ribs rump
        capicola voluptate dolore duis. Ball tip ipsum hamburger tenderloin sed
        pork belly et.
      </Text>
    </View>
  </View>
);

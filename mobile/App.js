import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SingleView from './screens/single'
import Discover from './screens/discover'

const App = StackNavigator({
  Discover: {
    screen: Discover
  },
  Single: { 
    screen: SingleView
  },
})


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SingleView></SingleView>
//       </View>
//     );
//   }
// }

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

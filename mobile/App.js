// Image I

// import React from 'react';
// import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';

// export default class App extends React.Component {
//   handleLike = () => {
//     console.log('like')
//   }
//   handleShare = () => {
//     console.log('share')
//   }
//   handleComment = () => {
//     console.log('comment')
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.mainHeader}>Freebird</Text>
//         <Image style={styles.mainImage} source={require('./travel.jpg')} />
//         <View style={styles.btns}>
//           <Button color="#39975c" onPress={this.handleLike} title="Like" />
//           <Button color='#456' onPress={this.handleShare} title="Share" />
//           <Button color='#456' onPress={this.handleComment} title="Comment" />
//         </View>
//         <View style={styles.comments}>
//           <FlatList
//             data={[
//               { key: 'Some User: A comment on the picture'},
//               { key: 'Another User: A comment on the picture'},
//               { key: 'And Another User: A comment on the picture'}
//             ]}
//             renderItem={({ item }) => <Text style={styles.comment}>{item.key}</Text>}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   comment: {
//     color: '#fff'
//   },
//   btns: {
//     marginTop: 5,
//     marginBottom: 5,
//     flexDirection: 'row',
//     width: '60%',
//     justifyContent: 'space-around'
//   },
//   mainImage: {
//     width: 320,
//     height: 280
//   },
//   mainHeader: {
//     backgroundColor: '#d25104',
//     color: '#fff',
//     fontSize: 30,
//     textAlign: 'center',
//     width: '100%',
//     paddingTop: 10,
//     paddingBottom: 15
//   },
//   container: {
//     flex: 1,
//     marginTop: 20,
//     backgroundColor: 'rgb(55, 63, 70)',
//     alignItems: 'center'  
//   },
// });


// Image II
import React from 'react';
import { SearchBar } from 'react-native-elements'
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';

export default class App extends React.Component {
  handleChange = () => {
    console.log('')
  }
  handleSubmit = () => {
    console.log('')
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchBar
          onChangeText={this.handleChange}
          onClearText={this.handleSubmit}
          placeholder='Type Here...' />
        <Image style={styles.mainImage} source={require('./img1.jpg')} />
        <Text style={styles.header}>Some Random Header</Text>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={require('./img2.jpg')} /><Image style={styles.image} source={require('./img3.jpg')} />
        </View>
        <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text style={styles.header}>Some Random Header</Text>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={require('./img4.jpg')} /><Image style={styles.image} source={require('./img5.jpg')} />
        </View>
        <Text style={styles.p}>>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  p: {
    color: '#fff'
  },
  imgContainer: {
    flexDirection: 'row'
  },
  image: {
    width: '50%',
    height: 80
  },
  header: {
    fontSize: 25,
    color: '#fff',
    marginTop: 5,
    marginBottom: 5
  },
  mainImage: {
    width: '100%',
    height: 120
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'rgb(55, 63, 70)'
  }
});


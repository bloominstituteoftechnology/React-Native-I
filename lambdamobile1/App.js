import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header}>header !</Text>
        </View>
        <View style={styles.image}>
          <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
          />
        </View>
        <View style={styles.likeShareCommentButtons}>
          <View style={styles.button,{marginLeft:50}}><Text>like</Text></View>
          <View style={styles.button}><Text>share</Text></View>
          <View style={styles.button,{marginRight:50}}><Text>comment</Text></View>
        </View>
        <View style={styles.comments}>
          <Text> comments</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  header:{
    flex: 2,
    marginTop : 30,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  image: {
    flex: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  likeShareCommentButtons:{
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
  },
  comments:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
  }
});


// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     console.log('Well, hello there!')
//     return (
//       <View style={styles.container}>
//         <View style={styles.child1}>
//           <View>
//             <Text style={styles.text1}>Header</Text>
//           </View>
//         </View>
//         <View style={styles.child2}>
//           <Text style={styles.text1}>IMAGE</Text>
//           <Image
//           style={{width: 50, height: 50}}
//           source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
//           />
//         </View>
//         <View style={styles.child3}>
//           <View style={styles.child3Box1}>
//             <Text style={styles.text1}>LIKE</Text>
//           </View>
//           <View style={styles.child3Box2}>
//             <Text style={styles.text1}>SHARE</Text>
//           </View>
//           <View style={styles.child3Box3}>
//             <Text style={styles.text1}>COMMENT</Text>
//           </View>
//         </View>
//         <View style={styles.child4}>
//           <View style={[styles.child4Box1, styles.marginsLR]}>
//             < Text style={styles.text2}>USER A</Text>
//           </View>
//           <View style={[styles.child4Box2, styles.marginsLR]}>
//             <Text style={styles.text2}>USER B</Text>
//           </View>
//           <View style={[styles.child4Box3, styles.marginsLR]}>
//             <Text style={styles.text2}>USER C</Text>
//           </View>
//         </View>
//       </View>
//
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // display: 'flex',
//     backgroundColor: 'salmon',
//     // alignItems: 'center',
//     marginTop: 20,
//   },
//
//   child1: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: 'red',
//   },
//
//   child2: {
//     flex: 4,
//     borderWidth: 1,
//     borderColor: 'green',
//   },
//
//   child3: {
//     flex: 1,
//     // height: 10,
//     // width: 140,
//     borderWidth: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   child3Box1: {
//     flex: 1,
//     borderWidth: 1,
//     marginLeft: 50,
//     backgroundColor: 'rgb(138, 180, 240)',
//   },
//   child3Box2: {
//     flex: 1,
//     borderWidth: 1,
//   },
//   child3Box3: {
//     flex: 1,
//     borderWidth: 1,
//     marginRight: 50,
//   },
//   text1: {
//     textAlign: 'center',
//     borderColor: 'yellow',
//     fontSize: 10,
//   },
//
//   child4: {
//     flex: 1,
//     // height: 25,
//     // width: 300,
//     borderWidth: 1,
//     borderColor: 'black',
//     justifyContent: 'center',
//   },
//   marginsLR: {
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   child4Box1: {
//     flex: 1,
//     borderWidth: 1,
//   },
//   child4Box2: {
//     flex: 1,
//     borderWidth: 1,
//   },
//   child4Box3: {
//     flex: 1,
//     borderWidth: 1,
//   },
//   text2: {
//     textAlign: 'center',
//     fontSize: 12,
//   }
// });

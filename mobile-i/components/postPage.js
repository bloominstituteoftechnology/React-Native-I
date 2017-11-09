import React from 'react';
import LikeBar from './likebar';
import CommentBox from './commentbox';
import logo from '../assets/ig-logo-word.png';
import profilePic from '../assets/ProfilePic.jpg';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Image, Text, View, Button } from 'react-native';
class PostExample extends React.Component {
  
  static navigationOptions = {
   headerStyle: {
     backgroundColor: (Platform.OS === 'ios') ? 'white' : 'black',
     height: (Platform.OS === 'ios') ? 80 : 25,
   }
  }
 render() {
   const { navigate } = this.props.navigation;
   return (
     <View style={styles.container}>
       <View style={styles.header}><Image source={logo} style={{width: '55%', height: '100%'}} /></View>
       <View style={styles.postContainer}>
       <View style={{height: 20, width: '100%'}} />
       <View style={styles.postImgUsername} />
         <View style={styles.postImgContainer}><Image source={profilePic} style={{width: '100%', height: '100%'}} /></View>
       </View> 
       <LikeBar />
       <CommentBox />
       <View style={{height:'1%', width: '100%'}} />
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F4F6F7',
    height: '100%',
    width: '100%'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height: '10%',
    backgroundColor: '#ECF0F1',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 5
  },
  postContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: '#D0D3D4',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  postImgUsername: {
    width:'90%', 
    height: '10%', 
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5, 
    marginTop: '5%', 
    backgroundColor: 'whitesmoke',
    borderColor: 'black',
    borderWidth: 1
  },

  postImgContainer:{
    width: '90%', 
    height: '90%', 
    marginBottom: '5%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    
  }
});
export default PostExample;
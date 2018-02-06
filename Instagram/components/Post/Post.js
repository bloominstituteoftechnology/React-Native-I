import React,{Component} from 'react';
import { Text, View, Image } from 'react-native';
import {textFont} from '../../AppStyle'
import {Header, Navbar, Like, Comment} from './PostStyle';


class Post extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={Header}>
                <Text style={textFont}>Header</Text>
                <Image  style={{width: '100%', height: 200}}
                source={require('./Anu_Smile.jpg')}/>
                <View style={Navbar}>
                <View style={Like}>
                    <Text style={{fontSize:15}}>Like</Text>
                </View>
                <View style={Like}>
                    <Text style={{fontSize:15}}>Share</Text>
                </View>
                <View style={Like}>
                    <Text style={{fontSize:15}}>Comment</Text>
                </View>
                </View>
                <View style={Comment}>
                    <Text style={{fontSize:15}}>Looking Pretty and all</Text>
                </View>
                <View style={Comment}>
                    <Text style={{fontSize:15}}>Just typing a Random Comment</Text>
                </View>
                <View style={Comment}>
                    <Text style={{fontSize:15}}>Comment 3</Text>
                </View>
            </View> 
        )
    }
}


export default Post;
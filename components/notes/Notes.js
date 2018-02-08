import React, { Component } from 'react';
import {
	FlatList,
	View,
	Animated,
	StyleSheet,
	Text,
	TouchableOpacity,
  Dimensions
} from 'react-native';
import Note from './Note';


export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.dims = Dimensions.get('window');
    this.height = this.dims.height - 160;
    this.width = this.dims.width;
  }
  render = () => {
    return (
    	<View
        style={{
          height: this.height,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
        <Text 
          style={{
            marginTop: 20,
            marginBottom: 10,
            fontSize: 20,
            width: '100%',
            textAlign: 'center',
            fontWeight: '300',
            color: '#61ADFB'
          }}>My Notes</Text>
        <FlatList 
          style={{
            width: '100%',
            height: '100%',
            marginBottom: 20,
            borderTopWidth: 1,
            borderTopColor: '#CFD3D3'
          }}
          data={this.props.notes}
          renderItem={({item}) => (
            <Note
              self={item} 
              note={item.note}
              completed={item.completed}
              markComplete={this.props.markComplete}
              delete={this.props.delete}
              width={this.width} />
          )}
          keyExtractor={(item, index) => index} />
      </View> 
    );
  }
}
import React, { Component } from 'react';
import {
	Animated,
	View,
	TextInput,
	StyleSheet
} from 'react-native';

export default class Input extends Component {
  constructor(props) {
  	super(props);
  	this.bottomBar = new Animated.Value(0);
  	this.styles = StyleSheet.create({
  		container: {
  			height: 40,
  			width: '80%',
  			maxWidth: 500,
  			borderBottomColor: '#DDDDDD',
  			borderBottomWidth: 1,
  			position: 'relative',
  			marginTop: 20
  		},
  		bottomBar: {
  			position: 'absolute',
  			bottom: 0,
  			left: 0,
  			width: '100%',
  			height: 2,
        borderRadius: 2,
  			backgroundColor: '#61ADFB',
  			zIndex: 2,
  			transform: [
  				{
  					scale: this.bottomBar.interpolate({
	  					inputRange: [0,1],
	  					outputRange: [0,1]
  					})
  				}
  			]
  		},
  		input: {
  			height: 40,
  			width: '100%',
  		}
  	});
  }

  focus = () => Animated.spring(this.bottomBar, {toValue: 1}).start();

  blur = () => {
  	if(this.props.val === '') {
  		Animated.spring(this.bottomBar, {toValue: 0}).start();
  	}
  }

  render = () => {
    return (
    	<View style={this.styles.container}>
    		<TextInput
    			onFocus={this.focus}
    			onBlur={this.blur}
    			onChangeText={text => this.props.update(text)}
    			style={this.styles.input}
    			placeholder="Add a note"
    			value={this.props.val} />
    		<Animated.View 
    			style={this.styles.bottomBar}></Animated.View>
    	</View>
    );
  }
}

import React, { Component } from 'react';
import {
	Animated,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';
import AddNote from '../addNote/AddNote';
import Notes from '../notes/Notes';

export default class Body extends Component {
	constructor(props) {
		super(props);
		this.dims = Dimensions.get('window');
		this.height = this.dims.height;
		this.styles = StyleSheet.create({
			container: {
				height: this.height,
				backgroundColor: '#FFF',
				width: '100%',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-start',
			}
		});
	}

	render = () => {
    return (
    	<TouchableWithoutFeedback
    		onPress={Keyboard.dismiss}
    		style={this.styles.container}>
    		<View style={this.styles.container}>
    			<AddNote
    				addNote={this.props.addNote} />
    			<Notes
    				notes={this.props.notes}
    				markComplete={this.props.markComplete}
    				delete={this.props.delete} />
    		</View>
    	</TouchableWithoutFeedback>
    );
	}
}
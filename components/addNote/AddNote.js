import React, { Component } from 'react';
import {
	View,
	Animated,
	TouchableOpacity,
	StyleSheet,
	Text,
  Keyboard
} from 'react-native';
import Input from './Input';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	text: ''
    }
    this.styles = StyleSheet.create({
    	container: {
    		width: '100%',
    		justifyContent: 'center',
    		alignItems: 'center',
        zIndex: 3,
    	}
    });
  }

  submit = () => {
    const newNote = this.state.text;
    if(this.state.text.length > 2) {
      this.props.addNote(newNote);
      this.setState({ text: '' });
    }
  }

  update = (text) => this.setState({ text });

  render = () => {
    return (
      <View style={this.styles.container}>
      	<View style={this.styles.container}>
      		<Input
      			update={this.update}
      			val={this.state.text} />
      		<TouchableOpacity
            onPress={this.submit}
      			style={{
      				height: 40,
      				width: '80%',
      				marginTop: 20,
      				justifyContent: 'center',
      				alignItems: 'center',
      				backgroundColor: '#61ADFB',
      				borderRadius: 2.5,
      				shadowColor: '#000',
					    shadowOffset: { width: 2, height: 3 },
					    shadowOpacity: 0.25,
					    shadowRadius: 2.5,
      			}}>
      			<Text
      				style={{
      					color: '#fff'
      				}}>Submit</Text>
      		</TouchableOpacity>
      	</View>
      </View>
    );
  }
}
import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	StatusBar
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
  	super(props);
  	this.styles = StyleSheet.create({
  		container: {
  			backgroundColor: '#61ADFB',
  			shadowColor: '#000',
		    shadowOffset: { width: 0, height: 2 },
		    shadowOpacity: 0.5,
		    shadowRadius: 10,
		    height: 60,
		    width: '100%',
		    justifyContent: 'flex-end',
		    alignItems: 'center',
		    zIndex: 10
  		}
  	});
  }

  render = () => {
    return (
    	<View style={this.styles.container}>
    		<StatusBar
    			barStyle="light-content" />
    		<View 
    			style={{
    				height: 45,
    				justifyContent: 'center',
		    		alignItems: 'center',
    			}}>
    			<Text
    				style={{
    					color: '#fff',
    					fontWeight: '300',
    					fontSize: 25
    				}}>Take Notes</Text>
    		</View>
    	</View>   
    );
  }
}

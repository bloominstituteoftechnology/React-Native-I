import React, { Component } from 'react';
import {
	View, 
	Text,
	TouchableOpacity,
  TouchableWithoutFeedback,
	Animated,
	Image
} from 'react-native';

export default class Note extends Component {
  constructor(props) {
  	super(props);
    this.note = new Animated.Value(0);
  }

  componentDidMount = () => Animated.spring(this.note, {toValue: 1}).start();

  delete = (e) => {
    Animated.spring(this.note, {toValue: 0}).start();
    setTimeout(() => {
      this.props.delete(e, this.props.self);
      Animated.timing(this.note, {toValue: 1, duration: 0}).start();
    }, 500);
  }

  render = () => {
    return (
      <TouchableWithoutFeedback
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
        <Animated.View 
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#CFD3D3',
            opacity: this.note,
            transform: [
              {
                translateX: this.note.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this.props.width, 0]
                })
              },
            ]
          }}>
        	<TouchableOpacity
        		onPress={e => this.props.markComplete(e, this.props.self)}
        		style={{
        			height: 30,
        			width: 30,
              marginLeft: 10,
        			borderRadius: 2.5,
        			backgroundColor: '#8196E2',
        			shadowColor: '#000',
					    shadowOffset: { width: 2, height: 3 },
					    shadowOpacity: 0.25,
					    shadowRadius: 2.5,
					    justifyContent: 'center',
					    alignItems: 'center'
        		}}>
        		{
        			this.props.completed &&
        			<Image
          			style={{
          				height: 20,
          				width: 20
          			}} 
          			source={require('../../public/check.png')} />
        		}
        		</TouchableOpacity>
          <Text>{this.props.note}</Text>
          <TouchableOpacity
          	onPress={this.delete}
          	style={{
          		height: 30,
          		width: 30,
          		borderRadius: 30/2,
          		backgroundColor: '#F94054',
          		shadowColor: '#000',
					    shadowOffset: { width: 0, height: 3 },
					    shadowOpacity: 0.25,
					    shadowRadius: 2.5,
					    justifyContent: 'center',
					    alignItems: 'center',
              marginRight: 10
          	}}>
          		<Image
          			style={{
          				height: 20,
          				width: 20
          			}} 
          			source={require('../../public/close.png')} />
          	</TouchableOpacity>
        </Animated.View>
      </TouchableWithoutFeedback> 
    );
  }
}

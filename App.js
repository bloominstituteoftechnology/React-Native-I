import React, { Component } from 'react';
import { 
  View,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import update from 'immutability-helper';
import TodoList from './components/todoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      topLevel: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },
      header: {
        fontSize: 30,
        fontWeight: '200',
        marginBottom: 30
      },
      inner: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
      },
      button: {
        width: '90%',
        height: 45,
        backgroundColor: '#568AEF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 2.5,
      },
      buttonInner: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }
    });
  }
  render = () => {
    return (
      <View style={this.styles.topLevel}>
        <View style={this.styles.container}>
          <Text style={this.styles.header}>Welcome to ToDos</Text>
          <TouchableOpacity 
            style={this.styles.button}
            onPress={() => this.props.navigation.navigate('TodoList')}>
            <View style={this.styles.buttinInner}>
              <Text
                style={{
                  color: '#fff'
                }}>Todo List</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={this.styles.button}>
            <View style={this.styles.buttinInner}>
              <Text
                style={{
                  color: '#fff'
                }}>Sign Up</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

const Routes = StackNavigator({
  Home: { 
    screen: App,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  TodoList: { 
    screen: TodoList,
    navigationOptions: {
      headerTitle: 'Todo List',
    },
  }
});

export default Routes;

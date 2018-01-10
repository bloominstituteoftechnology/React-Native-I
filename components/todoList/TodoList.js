import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import update from 'immutability-helper';
import Header from '../header/Header';
import Body from '../body/Body';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount = () => {
  	AsyncStorage.getItem('todoList').then(notes => {
  		if(notes.length) this.setState({notes: JSON.parse(notes)})
  	});
  }

  addNote = (note) => {
    const s = this.state.notes;
    const ns = update(s, { $push: [ {note: note, completed: false, id: s.length} ] });
    this.setState({ notes: ns });
    AsyncStorage.setItem('todoList', JSON.stringify(ns));
  }

  markComplete = (e, item) => {
    let i; let c; const s = this.state.notes;
    s.forEach((note, index) => {
      if(note.id === item.id) {
        i = index;
        c = note.completed;
      }
    });
    const ns = update(s, {[i]: {completed: {$set: !c}}});
    this.setState({ notes: ns });
    AsyncStorage.setItem('todoList', JSON.stringify(ns));
  }

  delete = (e, item) => {
    let i; const s = this.state.notes;
    s.forEach((note, index) => {
      if(note.id === item.id) i = index;
    });
    const ns = update(s, {$splice: [[i, 1]]});
    this.setState({ notes: ns });
    AsyncStorage.setItem('todoList', JSON.stringify(ns));
  }


  render = () => {
    return (
      <View style={styles.container}>
        <Header />
        <Body
          notes={this.state.notes}
          addNote={this.addNote}
          markComplete={this.markComplete}
          delete={this.delete} />
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
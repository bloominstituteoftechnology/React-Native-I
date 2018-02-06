import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  Text, 
  Image, 
  Button
} from 'react-native';

class DesignOne extends Component {
  render() {
    return (
      <ScrollView>
        <View style={ styles.view }>
          <View style={ styles.header }>
            <Text style={ styles.headerText }>Header</Text>
          </View>
          <Image source={ require('./images/pool.jpg') } />
          <View style={ styles.actionsRow }>
            <Button title="Like" onPress={ () => { alert('You clicked on Like button.'); } } />
            <Button title="Share" onPress={ () => { alert('You clicked on Share button.'); } } />
            <Button title="Comment" onPress={ () => { alert('You clicked on Comment button.'); } } />
          </View>
          <View style={ styles.comments }>
            <Text style={ styles.commentItem }>Some User: A comment on the picture</Text>
            <Text style={ styles.commentItem }>Another User: A comment on the picture</Text>
            <Text style={ styles.commentItem }>And Another User: A comment on the picture</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    paddingTop: 25,
    backgroundColor: '#0096ff',
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  actionsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 75,
  },
  comments: {
    width: '90%',
  },
  commentItem: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#000',
    padding: 5,
    paddingHorizontal: 10,
    marginVertical: 2,
  },
});

export default DesignOne;

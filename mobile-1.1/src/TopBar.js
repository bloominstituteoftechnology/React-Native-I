import React, { Component } from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, Text } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';

class TopBar extends Component {
    state = {
            menuVisible: false,
        }
    setMenuVisible(visible) {
        this.setState({ menuVisible: visible });
    }
    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.menuVisible}
                    onRequestClose={() => {alert("Menu has been closed.")}}
                    >
                    <View style={styles.modal}>
                    <View>
                        <Icon name='close' color='#fff' 
                        onPress={() => {
                            this.setMenuVisible(!this.state.menuVisible)
                        }}/>
                        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold',}}>
                            MENU
                        </Text>
                    </View>
                    </View>
                </Modal>

                <View style={styles.container}>
                        <Icon name='menu' color='#fff' style={{marginRight:10}} 
                        onPress={() => {
                            this.setMenuVisible(true)
                        }}/>
                    <SearchBar round placeholder='Search...' style={{width:280}} />
                    <Icon name='settings' color='#fff' style={{marginRight:10, marginLeft:10}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: '#d6d7da',
  },
  modal: {
    width: 200,
    height:300,
    backgroundColor: '#212121',
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: 'transparent',
  },
});

export default TopBar;
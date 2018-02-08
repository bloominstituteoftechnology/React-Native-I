import React, { Component } from 'react';
import {
  View
} from 'react-native';

import DesignOne from './DesignOne';
// import DesignTwo from './DesignTwo';

class App extends Component {
  render() {
    return (
      <View>
        <DesignOne />
        {/* <DesignTwo /> */}
      </View>
    );
  }
}

export default App;

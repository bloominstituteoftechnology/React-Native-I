import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home, PostExample, BlogExample } from './components';


 


const App = StackNavigator({
  Main: {screen: Home},
  Post: {screen: PostExample},
  Blog: {screen: BlogExample}
});



export default App;
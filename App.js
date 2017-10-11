import { StackNavigator } from 'react-navigation';
import Post from './Post';
import Search from './Search';

const App = StackNavigator({
  Post: {
    screen: Post,
    navigationOptions: { header: null }
  },
  Search: {
    screen: Search,
    navigationOptions: { header: null }
  }
});

export default App;

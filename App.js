import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PostPageHeader, PostPageImageContainer, PostPageButtonsWrapper, PostPageComments } from './Components/PostPage/PostPageIndex';
import { MainPageHeader, MainPageBannerImage, MainPageSubHeader, MainPageSubImage, MainPageSubDescription } from './Components/MainPage/MainPageIndex';


export default class App extends React.Component {
  render() {
    return (
      // <View style={container}>
      //   <PostPageHeader />
      //   <PostPageImageContainer />
      //   <PostPageButtonsWrapper />
      //   <PostPageComments />
      // </View>
      <View style={container}>
        <MainPageHeader />
        <MainPageBannerImage />
        <MainPageSubHeader />
        <MainPageSubImage />
        <MainPageSubDescription />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const { container } = styles;
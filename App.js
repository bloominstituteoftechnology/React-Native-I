import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TokyoHeader, TokyoImageContainer, TokyoButtonsWrapper, TokyoComments } from './Components/TokyoPage/TokyoIndex';
import { JapanHeader, JapanBannerImage, TokyoSubHeader, TokyoSubImages, TokyoSubDescription, KyotoSubHeader, KyotoSubImages, KyotoSubDescription } from './Components/JapanPage/JapanIndex';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { section: 'JapanPage' }
  }

  handleChangeToTokyoPage = () => {
    this.setState({
      section: 'TokyoPage'
    })
  }

  handleChangeToJapanPage = () => {
    this.setState({
      section: 'JapanPage'
    })
  }

  render() {
    if (this.state.section === 'JapanPage') {
      return (
        <ScrollView style={container}>
          <JapanHeader />
          <JapanBannerImage />
          <TokyoSubHeader />
          <TokyoSubImages section={this.handleChangeToTokyoPage} />
          <TokyoSubDescription />
          <KyotoSubHeader />
          <KyotoSubImages />
          <KyotoSubDescription />
        </ScrollView>
      )
    } else {
      return (
        <ScrollView style={container}>
          <TokyoHeader section={this.handleChangeToJapanPage} />
          <TokyoImageContainer />
          <TokyoButtonsWrapper />
          <TokyoComments />
        </ScrollView>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

const { container } = styles;
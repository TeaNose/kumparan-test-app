import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class ArticleDetailScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false //this will hide the TabBar navigator's header (LoggedIn_TabNavigator)
  }

  render() {
    return (
      <View>
        <Text>This is Detail Article Screen</Text>
      </View>
    );
  };
}

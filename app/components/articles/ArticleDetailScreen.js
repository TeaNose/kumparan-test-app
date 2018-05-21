import React, { Component } from 'react';
import {
  WebView,
  View,
  Text,
} from 'react-native';
import {
  Spinner,
} from 'native-base';

export default class ArticleDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Props nav: '+ JSON.stringify(this.props.navigation.state))
  }

  static navigationOptions = {
    title: 'Detail Article',
    tabBarVisible: false,
  }

  render() {
    return (
      <WebView
        source={{uri: this.props.navigation.state.params.uri}}
        renderLoading={() => (
          <View style={{flex: 1, alignItems: 'center'}}>
            <Spinner color='green' />
          </View>
        )}
      />
    );
  };
}

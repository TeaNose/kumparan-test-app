import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  WebView,
} from 'react-native';
import {
  Spinner,
} from 'native-base';
import Color from '../../utils/Color';
import StackHeader from '../../modules/StackHeader';

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    height: Dimensions.get('window').height - 150,
    justifyContent: 'center',
  },
});

export default class BookDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    header: <StackHeader
              title='Book Detail'
              onPressLeft= {() => { navigation.goBack() } }
            />
  })

  renderLoading() {
    return (
      <View style={styles.loaderContainer}>
        <Spinner color={Color.EASTERN_BLUE} />
      </View>
    )
  }

  render() {
    return (
      <WebView
        source={{uri: this.props.navigation.state.params.uri}}
        renderLoading={() => this.renderLoading()}
        startInLoadingState={true}
      />
    );
  };
}

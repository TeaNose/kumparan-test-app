import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
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
  headerContainer: {
    backgroundColor: Color.EASTERN_BLUE,
    height: 50,
  }
});

export default class ArticleDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    header: <StackHeader
              title='Article Detail'
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

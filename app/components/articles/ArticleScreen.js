import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

import { getArticleData } from '../../actions/ArticleAction';

const mapStateToProps = state => ({
  isRequestArticleData: state.article.isRequestArticleData,
  articleData: state.article.articleData,
  errorMessageArticle: state.article.errorMessageArticle,
});

class ArticleScreen extends Component {
  static navigationOptions = () => ({
    header: false,
  });

  componentDidMount() {
    console.log('Component Did Mount');
    this.props.dispatch(getArticleData());
  }

  render() {
    return (
      <View>
        <Text>Haha</Text>
      </View>
    );
  };
}

export default connect(mapStateToProps)(ArticleScreen);

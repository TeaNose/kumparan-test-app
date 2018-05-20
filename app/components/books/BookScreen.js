import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import { getBookData } from '../../actions/BookAction';

const mapStateToProps = state => ({
  isRequestBookData: state.book.isRequestBookData,
  bookData: state.book.bookData,
  errorMessageBook: state.book.errorMessageBook,
});

export default class BookScreen extends Component {
  componentDidMount() {
    console.log('Component Did Mount');
  }

  render() {
    return (
      <View>
        <Text>This is Book Screen</Text>
      </View>
    );
  };
}

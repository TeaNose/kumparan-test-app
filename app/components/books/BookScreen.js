import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Footer,
  Left,
  Right,
  Header,
  Text,
} from 'native-base';
import { connect } from 'react-redux';

import { getBookData } from '../../actions/BookAction';
import Color from '../../utils/Color';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.EASTERN_BLUE,
  },
  headerBody: {
    backgroundColor: Color.WHITE,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    paddingLeft: 10,
  },
  searchFont: {
    color: Color.GAINSBORO,
    fontSize: 14,
  }
});

const mapStateToProps = state => ({
  isRequestBookData: state.book.isRequestBookData,
  bookData: state.book.bookData,
  errorMessageBook: state.book.errorMessageBook,
});

const dataDummy = [
  {
    web_url: 'https://www.nytimes.com/1990/10/19/business/textron-posts-gain-in-profits.html',
    snippet: 'LEAD: Textron Inc. reported today that its third-quarter earnings increased nearly 12 percent, largely on improvements in its aerospace business.'
  },
  {
    web_url: 'https://www.nytimes.com/1990/10/19/business/textron-posts-gain-in-profits.html',
    snippet: 'LEAD: Textron Inc. reported today that its third-quarter earnings increased nearly 12 percent, largely on improvements in its aerospace business.'
  }
]

export default class BookScreen extends Component {
  static navigationOptions = () => ({
    header: false
  });

  componentDidMount() {
    console.log('Component Did Mount');
  }

  renderRow(rowData) {
    return (
      <Card>
        <CardItem button onPress={() => this.props.navigation.navigate('BookDetailScreen')}>
          <Body>
            <Text>{rowData.snippet}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={styles.headerBody}>
            <Text style={styles.searchFont}>Search</Text>
          </Body>
        </Header>
        <Content>
          <Card
            dataArray={dataDummy}
            renderRow={(data) => this.renderRow(data)}
          />
        </Content>
      </Container>
    );
  };
}

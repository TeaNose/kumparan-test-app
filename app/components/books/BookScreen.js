import React, { Component } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Input,
  Item,
  Right,
  Spinner,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    flex: 9,
  },
  searchFont: {
    color: Color.GAINSBORO,
    fontSize: 14,
  },
  descFont: {
    fontSize: 14,
    marginBottom: 10,
  },
  propFont1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  propFont2: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  propFont3: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  valueFont: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  modalContainer: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor:'rgba(52,52,52,0.5)',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  modalBox: {
    height: 90,
    width: 200,
    backgroundColor: Color.WHITE,
    borderRadius: 3,
  },
  sortFont: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  sortSeparator: {
    backgroundColor: Color.EASTERN_BLUE,
    height: 2,
  },
  loaderContainer: {
    flex: 1,
    height: Dimensions.get('window').height - 150,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  isRequestBookData: state.book.isRequestBookData,
  bookData: state.book.bookData,
  errorMessageBook: state.book.errorMessageBook,
});

class BookScreen extends Component {
  static navigationOptions = () => ({
    header: false
  });

  constructor(props) {
    super(props);
    this.state = {
      isSortingModalVisible: this.props.isSortingModalVisible,
      isRequestBookData: this.props.isRequestBookData,
      bookData: this.props.bookData,
      errorMessageBook: this.props.errorMessageBook,
      query: 'e-book-fiction',
    }
  }

  componentDidMount() {
    this.props.dispatch(getBookData(this.state.query));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isRequestBookData !== prevState.isRequestBookData) {
      return {
        isRequestBookData: nextProps.isRequestBookData,
        bookData: nextProps.bookData,
        errorMessageBook: nextProps.errorMessageBook,
      };
    }
    return null;
  }

  renderRow(rowData) {
    return (
      <Card>
        <CardItem button onPress={() => this.props.navigation.navigate('BookDetailScreen', {uri: rowData.amazon_product_url})}>
          <Body>
            <Text style={styles.propFont1}>{rowData.book_details[0].title}</Text>
            <Text style={styles.propFont2}>By: <Text style={styles.valueFont}>{rowData.book_details[0].author}</Text></Text>
            <Text style={styles.propFont2}>ISBN: <Text style={styles.valueFont}>{rowData.book_details[0].primary_isbn13}</Text></Text>
            <Text style={styles.propFont3}>Publisher: <Text style={styles.valueFont}>{rowData.book_details[0].publisher}</Text></Text>
            <Text style={styles.descFont}>{rowData.book_details[0].description}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }

  renderSortingModal() {
    return (
        <Modal
          onRequestClose={() => console.log("close")}
          animationType={"fade"}
          transparent={true}
          visible={this.state.isSortingModalVisible}
        >
          <TouchableWithoutFeedback onPress={() => this.setState({isSortingModalVisible: false})}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={styles.modalBox}>
                  <Text
                    onPress={() => {
                      this.setState({isSortingModalVisible: false});
                      this.props.dispatch(getBookData(this.state.query, 'ASC'))
                    }}
                    style={styles.sortFont}
                  >
                    Ascending
                  </Text>
                  <View style={styles.sortSeparator} />
                  <Text
                    onPress={() => {
                      this.setState({isSortingModalVisible: false});
                      this.props.dispatch(getBookData(this.state.query, 'DESC'))
                    }}
                    style={styles.sortFont}
                  >
                    Descending
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
    )
  }

  render() {
    return (
      <Container>
        {
          this.state.isSortingModalVisible ? this.renderSortingModal() : null
        }
        <Header style={styles.header} androidStatusBarColor={Color.EASTERN_BLUE}>
          <Body style={styles.headerBody}>
            <Item style={{height: 18}} >
              <Input
                placeholder="Search Book"
                onChangeText={(text) => this.setState({query: text})}
                onSubmitEditing={() => this.props.dispatch(getBookData(this.state.query, 'ASC'))}
              />
            </Item>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent onPress={() => this.setState({isSortingModalVisible: true})}>
              <Icon name='sort' />
            </Button>
          </Right>
        </Header>
        <Content>
        {
          this.state.isRequestBookData ?
            <View style={styles.loaderContainer}>
              <Spinner color={Color.EASTERN_BLUE} />
            </View>:
            <Card
              dataArray={this.state.bookData}
              renderRow={(data) => this.renderRow(data)}
            />
        }
        </Content>
      </Container>
    );
  };
}

export default connect(mapStateToProps)(BookScreen);

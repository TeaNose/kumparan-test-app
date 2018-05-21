import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import Icon from 'react-native-vector-icons/FontAwesome';

import { getArticleData } from '../../actions/ArticleAction';
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
  modalContainer: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor:'rgba(52,52,52,0.5)',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  }
});

const mapStateToProps = (state) => ({
  isRequestArticleData: state.article.isRequestArticleData,
  articleData: state.article.articleData,
  errorMessageArticle: state.article.errorMessageArticle,
});

class ArticleScreen extends Component {
  static navigationOptions = () => ({
    header: false
  });

  constructor(props) {
    super(props);
    this.state = {
      isSortingModalVisible: false,
      isRequestArticleData: this.props.isRequestArticleData,
      articleData: this.props.articleData,
      errorMessageArticle: this.props.errorMessageArticle,
      query: '',
      sort: 'newest',
    }
  }

  componentDidMount() {
    console.log('Component Did Mount');
    this.props.dispatch(getArticleData(this.state.query, this.state.sort));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("nextProps: "+JSON.stringify(nextProps.isRequestArticleData) + "; " + prevState.isRequestArticleData);
    if (nextProps.isRequestArticleData !== prevState.isRequestArticleData) {
      return {
        isRequestArticleData: nextProps.isRequestArticleData,
        articleData: nextProps.articleData,
        errorMessageArticle: nextProps.errorMessageArticle,
      };
    }
    return null;
  }

  renderRow(rowData) {
    return (
      <Card>
        <CardItem button onPress={() => this.props.navigation.navigate('ArticleDetailScreen', {uri: rowData.web_url})}>
          <Body>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>{rowData.headline.main}</Text>
            {
              rowData.snippet ?
              <Text style={{fontSize: 14}}>{rowData.headline.main}</Text> : null
            }

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
                <View style={{height: 90, width: 200, backgroundColor: Color.WHITE, borderRadius: 3}}>
                  <Text
                    onPress={() => {
                      this.setState({
                        sort: 'newest',
                        isSortingModalVisible: false
                      });
                      this.props.dispatch(getArticleData(this.state.query, this.state.sort));
                    }}
                    style={{marginTop: 10, marginBottom: 10, marginLeft: 10}}
                  >
                    Newest - Oldest
                  </Text>
                  <View style={{backgroundColor: Color.EASTERN_BLUE, height: 2}} />
                  <Text
                    onPress={() => {
                      this.setState({
                        sort: 'oldest',
                        isSortingModalVisible: false
                      });
                      this.props.dispatch(getArticleData(this.state.query, this.state.sort));
                    }}
                    style={{marginTop: 10, marginBottom: 10, marginLeft: 10}}
                  >
                    Oldest - Newest
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
        <Header style={styles.header}>
          <Body style={styles.headerBody}>
            <Item style={{height: 18}} >
              <Input
                placeholder="Search Article"
                onSubmitEditing={() => this.props.dispatch(getArticleData(this.state.query))}
                onChangeText={(text) => this.setState({query: text})}
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
            this.state.isRequestArticleData ?
            <Spinner color='green' /> :
            <Card
              dataArray={this.state.articleData}
              renderRow={(data) => this.renderRow(data)}
            />
          }
        </Content>
      </Container>
    );
  };
}

export default connect(mapStateToProps)(ArticleScreen);

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
  Footer,
  Input,
  Item,
  Left,
  Right,
  Header,
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

const mapStateToProps = state => ({
  isRequestArticleData: state.article.isRequestArticleData,
  articleData: state.article.articleData,
  errorMessageArticle: state.article.errorMessageArticle,
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

class ArticleScreen extends Component {
  static navigationOptions = () => ({
    header: false
  });

  constructor() {
    super();
    this.state = {
      isSortingModalVisible: false,
    }
  }

  componentDidMount() {
    console.log('Component Did Mount');
    this.props.dispatch(getArticleData());
  }

  renderRow(rowData) {
    return (
      <Card>
        <CardItem button onPress={() => this.props.navigation.navigate('ArticleDetailScreen')}>
          <Body>
            <Text>{rowData.snippet}</Text>
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
                  <Text onPress={() => this.setState({isSortingModalVisible: false})} style={{marginTop: 10, marginBottom: 10, marginLeft: 10}}> Newest - Oldest </Text>
                  <View style={{backgroundColor: Color.EASTERN_BLUE, height: 2}} />
                  <Text onPress={() => this.setState({isSortingModalVisible: false})} style={{marginTop: 10, marginBottom: 10, marginLeft: 10}}> Oldest - Newest </Text>
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
                onSubmitEditing={() => console.log('HAHHAHAHA')}
                style={{width: Dimensions.get('window') - 10}}
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
          <Card
            dataArray={dataDummy}
            renderRow={(data) => this.renderRow(data)}
          />

        </Content>
      </Container>
    );
  };
}

export default connect(mapStateToProps)(ArticleScreen);

import React from 'react';
import { BackHandler, StyleSheet, Image, StatusBar, View } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import ArticleScreen from '../components/articles/ArticleScreen';
import ArticleDetailScreen from '../components/articles/ArticleDetailScreen';
import BookScreen from '../components/books/BookScreen';
import BookDetailScreen from '../components/books/BookDetailScreen';

import Color from '../utils/Color';

const navigatorTabArticle = StackNavigator({
  ArticleScreen: {
    screen: ArticleScreen,
  },
  ArticleDetailScreen: {
    screen: ArticleDetailScreen,
  },
});

const navigatorTabBook = StackNavigator({
  BookScreen: {
    screen: BookScreen,
  },
  BookDetailScreen: {
    screen: BookDetailScreen,
  }
})

const routeConfiguration = {
  TabArticle: {
    screen: navigatorTabArticle,
    navigationOptions: {
      tabBarLabel: 'Articles',
    },
  },
  TabBook: {
    screen: navigatorTabBook,
    navigationOptions: {
      tabBarLabel: 'Books',
    },
  },
};

const tabBarConfiguration = {
  initialRouteName: 'TabArticle',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Color.WHITE,
    inactiveTintColor: Color.DARK_CYAN,
    style: {backgroundColor: Color.EASTERN_BLUE, paddingBottom: 13},
    labelStyle: {fontSize: 14},
  },
  swipeEnabled: true,
  animationEnabled: false,
};

export const MainNavigator = TabNavigator(routeConfiguration, tabBarConfiguration);

export const NavMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigatorTab,
);
const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends React.Component {
  render() {
    const { dispatch, navigatorTab } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: navigatorTab,
      addListener,
    });

    return (
      <View >
        <StatusBar
          backgroundColor="#d12b1f"
          barStyle="light-content"
        />
        <MainNavigator navigation={navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  navigatorTab: state.navigatorTab,
});


export default connect(mapStateToProps)(AppWithNavigationState);

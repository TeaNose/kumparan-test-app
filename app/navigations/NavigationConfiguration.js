import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

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

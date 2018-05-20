import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ArticleScreen from '../components/articles/ArticleScreen';
import ArticleDetailScreen from '../components/articles/ArticleDetailScreen';
import BookScreen from '../components/books/BookScreen';

const navigatorTabArticle = StackNavigator({
  ArticleScreen: {
    screen: ArticleScreen,
    navigationOptions: {
      tabBarVisible: true,
    },
  },
  ArticleDetailScreen: {
    screen: ArticleDetailScreen,
    navigationOptions: {
      tabBarVisible: true,
    },
  },
});

const routeConfiguration = {
  TabArticle: {
    screen: navigatorTabArticle,
    navigationOptions: {
      tabBarLabel: 'Articles',
    },
  },
  TabBook: {
    screen: BookScreen,
    navigationOptions: {
      tabBarLabel: 'Books',
    },
  },
};

const tabBarConfiguration = {
  initialRouteName: 'TabArticle',
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {backgroundColor: 'grey'},
    labelStyle: {fontSize: 12},
  },
  swipeEnabled: true,
  animationEnabled: false,
};

export const MainNavigator = TabNavigator(routeConfiguration, tabBarConfiguration);

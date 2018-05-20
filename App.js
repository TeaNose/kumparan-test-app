import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/reducers/Store';
import { MainNavigator } from './app/navigations/NavigationConfiguration';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ store }>
        <MainNavigator />
      </Provider>
    );
  }
}

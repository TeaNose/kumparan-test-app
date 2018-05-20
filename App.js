import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from './app/reducers/Store';
import AppWithNavigationState from './app/navigations/NavigationConfiguration';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ Store }>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { MainNavigator, NavMiddleware } from '../navigations/NavigationConfiguration';

import { articleReducer } from './ArticleReducer';
import { bookReducer } from './BookReducer';

const middleware = [thunk, NavMiddleware];

const combinedReducer = combineReducers({
  navigatorTab: (state, action) => {
    const nextState = MainNavigator.router.getStateForAction(action, state);
    return nextState || state;
  },
  article: articleReducer,
  book: bookReducer,
});

export default createStore(
  combinedReducer,
  applyMiddleware(...middleware)
)

import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
// import thunk from 'redux-thunk';
const thunk = require('redux-thunk').default;

import { articleReducer } from './ArticleReducer';
import { bookReducer } from './BookReducer';

const combinedReducer = combineReducers({
  article: articleReducer,
  book: bookReducer,
});

export default createStore(
  combinedReducer,
  applyMiddleware(thunk)
)

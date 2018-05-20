import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { articleReducer } from './ArticleReducer';
import { bookReducer } from './BookReducer';

const middleware = () => {
  return applyMiddleware(
    thunk
  );
};

export default createStore(
  combineReducers({
    article: articleReducer,
    book: bookReducer,
  }),
  middleware()
)

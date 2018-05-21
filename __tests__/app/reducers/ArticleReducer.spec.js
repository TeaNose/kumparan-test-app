import * as ActionTypes from '../../../app/actions/ActionType';
import { articleReducer } from '../../../app/reducers/ArticleReducer';

const initialState = {
  isRequestArticleData: false,
  articleData: [],
  errorMessageArticle: '',
};

describe ('Article Reducer', function(){
  it('should return the initial state', function() {
      expect(articleReducer(initialState, {})).toEqual(initialState);
  });

  it("should react to an action with the type 'REQUEST_ARTICLE_DATA_FAILED'", function() {
    const isRequestArticleData = false;
    const errorMessageArticle = 'Error'
    expect(articleReducer(initialState, {
        type: ActionTypes.REQUEST_ARTICLE_DATA_FAILED,
        error: errorMessageArticle,
    })).toEqual({...initialState, isRequestArticleData, errorMessageArticle});
  });

  it("should react to an action with the type 'REQUESTING_ARTICLE_DATAS'", function() {
    const isRequestArticleData = true;
    expect(articleReducer(initialState, {
        type: ActionTypes.REQUESTING_ARTICLE_DATAS
    })).toEqual({...initialState, isRequestArticleData});
  });

  it("should react to an action with the type 'REQUEST_ARTICLE_DATA_SUCCESS'", function() {
    const isRequestArticleData = false;
    const articleData = {
      status: 'OK'
    };
    expect(articleReducer(initialState, {
        type: ActionTypes.REQUEST_ARTICLE_DATA_SUCCESS,
        data: articleData
    })).toEqual({...initialState, isRequestArticleData, articleData});
  });
})
